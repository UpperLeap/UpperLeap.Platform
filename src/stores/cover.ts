import { create } from "zustand";

interface CoverState {
  gameName: string;
  setGameName: (name: string) => void;
}

const useCoverStore = create<CoverState>((set) => ({
  gameName: "league-of-legends",
  setGameName: (name: string) => set({ gameName: name }),
}));

export default useCoverStore;
