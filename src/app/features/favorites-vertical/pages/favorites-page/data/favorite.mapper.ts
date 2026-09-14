import type { FavoriteViewModel } from '../domain/favorite.viewmodel';
import type { FavoriteResponseDto } from './favorite-response.dto';

export const FavoriteMapper = {
  fromResponse(response: FavoriteResponseDto): FavoriteViewModel[] {
    return response.favorites.map((favorite) => (
      {
        id: favorite.id,
        type: favorite.type,
        title: favorite.title,
        description: favorite.description,
        icon: favorite.icon,
        route: favorite.route,
        enabled: favorite.enabled,
      }
    ));
  },
};
