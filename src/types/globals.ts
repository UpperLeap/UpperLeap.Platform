export type TProvider = {
  children: React.ReactNode;
  [key: string]: unknown;
};

export interface IParams {
  params: {
    locale: string;
  };
}
