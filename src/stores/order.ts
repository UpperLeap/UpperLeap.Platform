import { BasicGame } from "@/types/game";
import { create } from "zustand";

type OrderDataStore = {
  game: BasicGame | null;
  currentRank: {
    name: string;
    image: string;
    title: string;
    hiddenOn: string[] | null;
    color: string;
    isDivisionsVisible: boolean;
  };
  currentDivision: number;
  desiredRank: {
    name: string;
    image: string;
    title: string;
    hiddenOn: string[] | null;
    color: string;
    isDivisionsVisible: boolean;
  };
  configuration: {
    priorityBoost: boolean;
    streamGames: boolean;
    soloOnlyQueue: boolean;
    playWithBooster: boolean;
  };
  discountCode: string;
  boostingType: number;
  desiredDivision: number;
  paymentMethod: number;
  server: number;
  pointsGain: number;
  currentPoints: number;
  queueType: number;
  gameMode: number;
  winAmount: number;
  agents: string[];
  setOrderData: (orderData: Partial<OrderDataStore>) => void;
  clearOrderData: () => void;
};

export const initialOrderState = {
  game: null,
  currentRank: {
    name: "",
    image: "",
    title: "",
    hiddenOn: null,
    color: "",
    isDivisionsVisible: true,
  },
  currentDivision: 1,
  desiredRank: {
    name: "",
    image: "",
    title: "",
    hiddenOn: null,
    color: "",
    isDivisionsVisible: true,
  },
  desiredDivision: 1,
  configuration: {
    priorityBoost: false,
    streamGames: false,
    soloOnlyQueue: false,
    playWithBooster: false,
  },
  discountCode: "",
  boostingType: 0,
  server: 0,
  pointsGain: 0,
  currentPoints: 0,
  gameMode: 0,
  paymentMethod: 0,
  queueType: 0,
  winAmount: 3,
  agents: [],
};

const useOrderDataStore = create<OrderDataStore>((set) => ({
  ...initialOrderState,
  setOrderData: (orderData: Partial<OrderDataStore>) => set(orderData),
  clearOrderData: () => set(initialOrderState),
}));

export default useOrderDataStore;
