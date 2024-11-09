import { User } from "./user";

export type Message = {
  id: string;
  userId: string;
  content: string;
  fromUserName: string;
  room: string;
  imageUrl: string;
  isImage: boolean;
  timestamp: string;
};

export type Chat = {
  id: string;
  name: string;
  messages: Message[];
  messagesList: Message[];
};
