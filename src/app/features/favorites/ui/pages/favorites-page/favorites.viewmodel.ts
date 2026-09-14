import type { Favorite } from '../../../domain/entities/favorite';

const MAX_VISIBLE_FAVORITES = 3;

export interface FavoritesState {
  readonly favorites: readonly Favorite[];
  readonly isLoading: boolean;
  readonly errorMessage: string | null;
}

export interface FavoriteListItemViewModel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly route: string;
}

export interface FavoritesViewModel {
  readonly items: readonly FavoriteListItemViewModel[];
  readonly isEmpty: boolean;
  readonly isLoading: boolean;
  readonly errorMessage: string | null;
}

export function createFavoritesViewModel(state: FavoritesState): FavoritesViewModel {
  const items = state.favorites
    .filter((favorite) => favorite.enabled)
    .slice(0, MAX_VISIBLE_FAVORITES)
    .map((favorite) => ({
      id: favorite.id,
      title: favorite.title,
      description: favorite.description,
      route: favorite.route,
    }));

  return {
    items,
    isEmpty: !state.isLoading && !state.errorMessage && items.length === 0,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
  };
}
