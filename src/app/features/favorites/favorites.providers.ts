import type { Provider } from '@angular/core';

import { GetFavoritesUseCase } from './application/use-cases/get-favorites.use-case';
import { FavoriteHttpRepository } from './data/api/favorite-http.repository';
import { FavoriteRepository } from './domain/repositories/favorite.repository';

export function provideFavorites(): Provider[] {
  return [
    GetFavoritesUseCase,
    {
      provide: FavoriteRepository,
      useClass: FavoriteHttpRepository,
    },
  ];
}
