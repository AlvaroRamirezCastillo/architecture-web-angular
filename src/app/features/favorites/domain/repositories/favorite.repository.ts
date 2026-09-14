import type { Observable } from 'rxjs';

import type { Favorite } from '../entities/favorite';

export abstract class FavoriteRepository {
  abstract getFavorites(): Observable<readonly Favorite[]>;
}
