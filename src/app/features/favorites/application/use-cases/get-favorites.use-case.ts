import { inject, Service } from '@angular/core';

import type { Favorite } from '../../domain/entities/favorite';
import { FavoriteRepository } from '../../domain/repositories/favorite.repository';

@Service({ autoProvided: false })
export class GetFavoritesUseCase {
  private readonly favoriteRepository = inject(FavoriteRepository);

  execute(): Promise<readonly Favorite[]> {
    return this.favoriteRepository.getFavorites();
  }
}
