// import { Order } from "./order";

export enum PaymentMethod {
  "lemon",
  "crypto",
}

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
  paymentMethod: PaymentMethod;
  order: null; // Order
};

export type PaginatedTransactions = {
  items: Transaction[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type Wallet = {
  id: string;
  userId: string;
  balance: number;
  updatedDate: string;
  transactions: Transaction[];
  paginatedTransactions: PaginatedTransactions;
};

export type Withdrawal = {
  id: string;
  userId: string;
  amount: number;
  isCompleted: boolean;
  isRejected: boolean;
  rejectionReason: string;
  createdDate: string;
  updatedDate: string;
};
