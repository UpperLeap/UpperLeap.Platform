import { User } from "@/types/user";
import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  user: User | null;
  setAuth: (auth: Partial<AuthStore>) => void;
  removeAuth: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  isLoggedIn: false,
  user: null,
  setAuth: (auth: Partial<AuthStore>) => set(auth),
  removeAuth: () => set({ isLoggedIn: false, user: null }),
}));
