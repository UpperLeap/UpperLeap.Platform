type Wallet = {
  id: string;
  userId: string;
  balance: number;
  updatedDate: string;
  transactions: string[];
};

export enum BoosterRank {
  Novice,
  Expert,
  Master,
  Legend,
}

export type BoosterStats = {
  rank: BoosterRank;
  totalOrders: number;
  completedOrders: number;
};

export type User = {
  id: string;
  userName: string;
  biography: string;
  imageUrl: string;
  createdDate: string;
  updatedDate: string;
  lastUserNameChangeDate: string;
  wallet: Wallet;
  languages: string[];
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  boosterStats?: BoosterStats;
};
