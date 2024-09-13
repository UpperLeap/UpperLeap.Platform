export type TProvider = {
  children: React.ReactNode;
  [key: string]: unknown;
};

export interface IParams {
  params: {
    locale: string;
  };
}

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  type: string;
  expiry: string;
};
