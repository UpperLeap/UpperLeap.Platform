import { create } from "zustand";

type RefreshStateStore = {
  isRefreshing: boolean;
  setIsRefreshing: (isRefreshing: boolean) => void;
};

const useRefreshStateStore = create<RefreshStateStore>((set) => ({
  isRefreshing: false,
  setIsRefreshing: (isRefreshing) => set({ isRefreshing }),
}));

export default useRefreshStateStore;
