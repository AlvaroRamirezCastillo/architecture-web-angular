export type FavoriteTypeViewModel =
  'CARD_PAYMENT' | 'MOBILE_TOPUP' | 'OWN_TRANSFER' | 'SERVICE_PAYMENT' | 'THIRD_PARTY_TRANSFER';

export interface FavoriteViewModel {
  readonly id: string;
  readonly type: FavoriteTypeViewModel;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly route: string;
  readonly enabled: boolean;
}

export interface FavoritesStateViewModel {
  readonly favorites: readonly FavoriteViewModel[];
  readonly isLoading: boolean;
  readonly errorMessage: string | null;
}
