export type FavoriteTypeDto =
  'CARD_PAYMENT' | 'MOBILE_TOPUP' | 'OWN_TRANSFER' | 'SERVICE_PAYMENT' | 'THIRD_PARTY_TRANSFER';

export interface FavoriteItemResponseDto {
  readonly id: string;
  readonly type: FavoriteTypeDto;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly route: string;
  readonly enabled: boolean;
}

export interface FavoriteResponseDto {
  readonly userId: string;
  readonly bankId: string;
  readonly favorites: readonly FavoriteItemResponseDto[];
}
