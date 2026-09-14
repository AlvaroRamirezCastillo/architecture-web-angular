import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, InjectionToken, Service } from '@angular/core';
import { map, type Observable } from 'rxjs';

import type { Favorite } from '../../domain/entities/favorite';
import type { FavoriteRepository } from '../../domain/repositories/favorite.repository';
import type { FavoriteResponseDto } from '../dto/favorite-response.dto';
import { FavoriteMapper } from '../mappers/favorite.mapper';

export interface GetFavoritesRequest {
  readonly userId?: string;
}

@Service()
export class FavoriteHttpRepository implements FavoriteRepository {
  private readonly http = inject(HttpClient);

  getFavorites(request: GetFavoritesRequest = {}): Observable<readonly Favorite[]> {
    const url = 'http://127.0.0.1:3000/api/bank/favorites';

    return this.http
      .get<FavoriteResponseDto>(url)
      .pipe(map((response) => FavoriteMapper.fromResponse(response)));
  }
}
