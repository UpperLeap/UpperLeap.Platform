import { create } from "zustand";

type loginPayload = {
  email: string;
  username: string;
  otp: string;
};

type StoreState = {
  closeModal: (() => void) | null;
  openModal: (() => void) | null;
  currentTab: "login" | "register" | "otp";
  payload: loginPayload;
  setModalData: (modalData: Partial<StoreState>) => void;
};

const useModalStore = create<StoreState>((set) => ({
  closeModal: null,
  openModal: null,
  payload: {
    email: "",
    username: "",
    otp: "",
  },
  currentTab: "login",
  setModalData: (modalData: Partial<StoreState>) => set(modalData),
}));

export default useModalStore;
