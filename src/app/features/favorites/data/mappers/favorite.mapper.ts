import type { Favorite } from '../../domain/entities/favorite';
import type { FavoriteItemResponseDto, FavoriteResponseDto } from '../dto/favorite-response.dto';

export const FavoriteMapper = {
  fromResponse(response: FavoriteResponseDto): Favorite[] {
    return response.favorites.map((favorite) => FavoriteMapper.fromItemResponse(favorite));
  },

  fromItemResponse(response: FavoriteItemResponseDto): Favorite {
    return {
      id: response.id,
      type: response.type,
      title: response.title,
      description: response.description,
      icon: response.icon,
      route: response.route,
      enabled: response.enabled,
    };
  },
} as const;
