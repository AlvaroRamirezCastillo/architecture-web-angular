import type { FavoriteViewModel } from './favorite.viewmodel';

export function canExecuteFavorite(favorite: FavoriteViewModel): boolean {
  return favorite.enabled && favorite.route.trim().length > 0;
}
