import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import type { Favorite } from '../../domain/entities/favorite';
import type { FavoriteRepository } from '../../domain/repositories/favorite.repository';
import type { FavoriteResponseDto } from '../dto/favorite-response.dto';
import { FavoriteMapper } from '../mappers/favorite.mapper';

@Service()
export class FavoriteHttpRepository implements FavoriteRepository {
  private readonly http = inject(HttpClient);

  async getFavorites(): Promise<readonly Favorite[]> {
    const url = 'http://localhost:3000/api/bank/favorites';
    const response = await firstValueFrom(this.http.get<FavoriteResponseDto>(url));

    return FavoriteMapper.fromResponse(response);
  }
}
