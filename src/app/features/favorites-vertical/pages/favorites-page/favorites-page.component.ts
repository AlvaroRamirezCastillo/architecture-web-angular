import { Component, inject, OnInit } from '@angular/core';

import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoriteApiRepository } from './data/favorite-api.repository';
import { FavoriteRepository } from './domain/favorite.repository';
import { FavoritesFacade } from './favorites.facade';

@Component({
  imports: [FavoriteListComponent],
  providers: [
    FavoritesFacade,
    {
      provide: FavoriteRepository,
      useClass: FavoriteApiRepository,
    },
  ],
  selector: 'app-favorites-page',
  styleUrl: './favorites-page.component.css',
  templateUrl: './favorites-page.component.html',
})
export class FavoritesPageComponent implements OnInit {
  protected readonly facade = inject(FavoritesFacade);

  ngOnInit(): void {
    this.facade.load();
  }
}
