import { BasicGame } from "./game";
import { User } from "./user";
import { PaymentMethod } from "./wallet";

export type OrdersResponse = {
  items: Order[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type PriceData = {
  total: number;
  subtotal: number;
  platformFees: number;
  priceBeforeDiscount: number;
  couponCode: string;
};

export enum Region {
  "eu",
  "na",
}

export enum CurrentRating {
  "0-20",
  "21-40",
  "41-60",
  "61-80",
  "81-100",
}

export enum BoostingType {
  "rank-boost" = 0,
  "win-boost" = 1,
  "placement-boost" = 2,
  "unrated-boost" = 3,
}

export type BoostConfiguration = {
  priorityBoost: boolean;
  streamGames: boolean;
  soloOnlyQueue: boolean;
  playWithBooster: boolean;
  code: string;
};

export type BoostingDetails = {
  gameId: string;
  boosterId: string;
  region: Region;
  configuration: BoostConfiguration;
  type: BoostingType;
  mode: number; // todo: add enum
  currentRating: CurrentRating;
  currentRank: string;
  desiredRank: string;
  currentDivision: number;
  desiredDivision: number;
  winAmount: number;
  valorantAgents: string[];
  vpnCountry: string;
  booster: User;
  game: BasicGame;
};

export type OrderTransaction = {
  id: string;
  walletId: string;
  orderId: string;
  token: string;
  service: string;
  amount: number;
  completed: boolean;
  createdDate: string;
  updatedDate: string;
  order: string;
};

export type Credential = {
  id: string;
  orderId: string;
  username: string;
  value: string;
  password: string;
  isTwoFactorEnabled: boolean;
  createdByUserId: string;
  updatedByUserId: string;
  createdDate: string;
  updatedDate: string;
};

export type Order = {
  id: string;
  userId: string;
  name: string;
  paymentId: string;
  paymentUrl: string;
  currency: string;
  completed: boolean;
  price: PriceData;
  method: PaymentMethod;
  createdDate: string;
  updatedDate: string;
  transaction: OrderTransaction;
  credential: Credential;
  boostingDetails: BoostingDetails;
};
