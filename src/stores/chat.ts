import { Message } from "@/types/chat";
import { create } from "zustand";

interface ChatData {
  messages: Message[];
  isActive: boolean;
  isPending: boolean;
  loadingMessagesIds: string[];
  setChatData: (chatData: Partial<ChatData>) => void;
}

const useChatDataStore = create<ChatData>((set) => ({
  messages: [],
  isActive: false,
  isPending: false,
  loadingMessagesIds: [],
  setChatData: (chatData: Partial<ChatData>) => set(chatData),
}));

export default useChatDataStore;
