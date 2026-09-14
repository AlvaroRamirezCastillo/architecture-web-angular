import type { FavoriteViewModel } from './favorite.viewmodel';

export abstract class FavoriteRepository {
  abstract getFavorites(): Promise<readonly FavoriteViewModel[]>;
}
