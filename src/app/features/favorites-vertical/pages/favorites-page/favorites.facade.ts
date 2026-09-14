import { inject, Service, signal } from '@angular/core';

import { canExecuteFavorite } from './domain/can-execute-favorite';
import { FavoriteRepository } from './domain/favorite.repository';
import { type FavoritesStateViewModel } from './domain/favorite.viewmodel';

const INITIAL_STATE: FavoritesStateViewModel = {
  favorites: [],
  isLoading: false,
  errorMessage: null,
};

@Service({ autoProvided: false })
export class FavoritesFacade {
  private readonly favoriteRepository = inject(FavoriteRepository);
  readonly favoritesStateViewmodel = signal<FavoritesStateViewModel>(INITIAL_STATE);

  load(): void {
    void this.loadFavorites();
  }

  private async loadFavorites(): Promise<void> {
    this.favoritesStateViewmodel.update((state) => ({
      ...state,
      isLoading: true,
      errorMessage: null,
    }));

    try {
      const favorites = (await this.favoriteRepository.getFavorites())
        .filter(canExecuteFavorite)
        .slice(0, 3);

      this.favoritesStateViewmodel.set({
        favorites,
        isLoading: false,
        errorMessage: null,
      });
    } catch {
      this.favoritesStateViewmodel.update((state) => ({
        ...state,
        isLoading: false,
        errorMessage: 'No pudimos cargar tus favoritos.',
      }));
    }
  }
}
