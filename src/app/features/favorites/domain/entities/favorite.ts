export type FavoriteType =
  'CARD_PAYMENT' | 'MOBILE_TOPUP' | 'OWN_TRANSFER' | 'SERVICE_PAYMENT' | 'THIRD_PARTY_TRANSFER';

export interface Favorite {
  readonly id: string;
  readonly type: FavoriteType;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly route: string;
  readonly enabled: boolean;
}
