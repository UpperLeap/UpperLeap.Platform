import { getCookieClient } from "@/services/cookies/cookiesClient";
import { User } from "@/types/user";
import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  user: User | null;
  setAuth: (auth: Partial<AuthStore>) => void;
  removeAuth: () => void;
};

const accessToken = getCookieClient("accessToken");

export const useAuthStore = create<AuthStore>()((set) => ({
  isLoggedIn: !!accessToken,
  user: null,
  tenants: null,
  setAuth: (auth: Partial<AuthStore>) => set(auth),
  removeAuth: () => set({ isLoggedIn: false, user: null }),
}));
