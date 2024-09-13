import { getCookieClient } from "@/services/cookies/cookiesClient";
import { User } from "@/types/user";
import { access } from "fs";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

type AuthStore = {
  isLoggedIn: boolean;
  user: User | null;
  accessToken: string | null;
  setAuth: (auth: Partial<AuthStore>) => void;
  removeAuth: () => void;
  checkAuth: () => void;
};

// export const useAuthStore = create<AuthStore>()((set) => ({
//   isLoggedIn: !!accessToken,
//   user: null,
//   setAuth: (auth: Partial<AuthStore>) => set(auth),
//   removeAuth: () => set({ isLoggedIn: false, user: null }),
// }));

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      user: null,
      accessToken: null,
      setAuth: (auth: Partial<AuthStore>) => set({ ...auth }),
      removeAuth: () => set({ isLoggedIn: false, user: null, accessToken: null }),
      checkAuth: () => {
        const accessToken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("accessToken="))
          ?.split("=")[1];

        set({ isLoggedIn: !!accessToken, accessToken });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);