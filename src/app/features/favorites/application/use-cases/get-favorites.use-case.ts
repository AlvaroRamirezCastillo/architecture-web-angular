import { inject, Service } from '@angular/core';
import type { Observable } from 'rxjs';

import type { Favorite } from '../../domain/entities/favorite';
import { FavoriteRepository } from '../../domain/repositories/favorite.repository';

@Service({ autoProvided: false })
export class GetFavoritesUseCase {
  private readonly favoriteRepository = inject(FavoriteRepository);

  execute(): Observable<readonly Favorite[]> {
    return this.favoriteRepository.getFavorites();
  }
}
