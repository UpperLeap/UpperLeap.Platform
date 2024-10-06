// import { Order } from "./order";

export type Transaction = {
  id: string;
  walletId: string;
  orderId: string;
  token: string;
  service: string;
  amount: number;
  completed: boolean;
  createdDate: string;
  updatedDate: string;
  order: null; // Order
};

export type Wallet = {
  id: string;
  userId: string;
  balance: number;
  updatedDate: string;
  transactions: Transaction[];
};
