import { create } from "zustand";

type NavbarStore = {
  isNavbarOpen: boolean;
  openNavbar: () => void;
  closeNavbar: () => void;
  setNavbarData: (data: Partial<NavbarStore>) => void;
};

export const useNavbarStore = create<NavbarStore>()((set) => ({
  isNavbarOpen: false,
  openNavbar: () => set({ isNavbarOpen: true }),
  closeNavbar: () => set({ isNavbarOpen: false }),
  setNavbarData: (data: Partial<NavbarStore>) => set(data),
}));
