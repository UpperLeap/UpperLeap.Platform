import { User } from "@/types/user";
import { create } from "zustand";

type TipStore = {
  amount: number;
  boosterData: User | null;
  setData: (data: Partial<TipStore>) => void;
};

export const useTipStore = create<TipStore>()((set) => ({
  amount: 0,
  boosterData: null,
  setData: (data: Partial<TipStore>) => set(data),
}));
