import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import type { FavoriteViewModel } from '../domain/favorite.viewmodel';
import type { FavoriteRepository } from '../domain/favorite.repository';
import type { FavoriteResponseDto } from './favorite-response.dto';
import { FavoriteMapper } from './favorite.mapper';

const FAVORITES_API_URL = 'http://localhost:3000/api/bank/favorites';

@Service({ autoProvided: false })
export class FavoriteApiRepository implements FavoriteRepository {
  private readonly http = inject(HttpClient);

  async getFavorites(): Promise<readonly FavoriteViewModel[]> {
    const response = await firstValueFrom(this.http.get<FavoriteResponseDto>(FAVORITES_API_URL));

    return FavoriteMapper.fromResponse(response);
  }
}
