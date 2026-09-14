import type { Favorite } from '../entities/favorite';

export abstract class FavoriteRepository {
  abstract getFavorites(): Promise<readonly Favorite[]>;
}
