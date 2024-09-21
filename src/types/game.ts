export enum BoostingType {
  "rank-boost" = 0,
  "win-boost" = 1,
  "placement-boost" = 2,
  "unrated-boost" = 3,
}

export type BasicGame = {
  id: string;
  name: string;
  imageUrl: string;
  isVisible: boolean;
  isDisabled: boolean;
  isUpcoming: boolean;
  createdDate: string;
};
