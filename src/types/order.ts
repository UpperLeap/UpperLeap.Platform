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
  region: number; // todo: add enum
  configuration: BoostConfiguration;
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
  method: number; // todo: add enum
  createdDate: string;
  updatedDate: string;
  transaction: unknown; // todo: add type
  credential: unknown; // todo: add type
  boostingDetails: BoostingDetails;
  type: number; // todo: add enum
  mode: number; // todo: add enum
  currentRating: number; // todo: add enum
  currentRank: string;
  desiredRank: string;
  currentDivision: number;
  desiredDivision: number;
  winAmount: number;
  valorantAgents: string[];
  vpnCountry: string;
  booster: unknown; // todo: add type
};
