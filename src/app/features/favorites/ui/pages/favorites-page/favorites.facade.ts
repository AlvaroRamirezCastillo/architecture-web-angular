import { computed, inject, Service, signal } from '@angular/core';

import { GetFavoritesUseCase } from '../../../application/use-cases/get-favorites.use-case';
import { createFavoritesViewModel, type FavoritesState } from './favorites.viewmodel';

const INITIAL_STATE: FavoritesState = {
  favorites: [],
  isLoading: false,
  errorMessage: null,
};

@Service({ autoProvided: false })
export class FavoritesFacade {
  private readonly getFavoritesUseCase = inject(GetFavoritesUseCase);
  private readonly state = signal<FavoritesState>(INITIAL_STATE);
  readonly viewModel = computed(() => createFavoritesViewModel(this.state()));

  load(): void {
    void this.loadFavorites();
  }

  private async loadFavorites(): Promise<void> {
    this.state.update((state) => ({
      ...state,
      isLoading: true,
      errorMessage: null,
    }));

    try {
      const favorites = await this.getFavoritesUseCase.execute();

      this.state.set({
        favorites,
        isLoading: false,
        errorMessage: null,
      });
    } catch {
      this.state.update((state) => ({
        ...state,
        isLoading: false,
        errorMessage: 'No pudimos cargar tus favoritos.',
      }));
    }
  }
}
