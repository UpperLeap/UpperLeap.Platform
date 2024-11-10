import { Message } from "@/types/chat";
import { create } from "zustand";

export interface ChatData {
  messages: Message[];
  isActive: boolean;
  setChatData: (chatData: Partial<ChatData>) => void;
  addMessage: (newMessage: Message) => void;
}

const useChatDataStore = create<ChatData>((set) => ({
  messages: [],
  isActive: false,
  setChatData: (chatData: Partial<ChatData>) => set(chatData),
  addMessage: (newMessage: Message) =>
    set((state) => {
      return {
        messages: state.messages.concat(newMessage),
      };
    }),
}));

export default useChatDataStore;
