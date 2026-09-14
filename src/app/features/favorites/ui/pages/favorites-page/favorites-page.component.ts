import { Component, inject, OnInit } from '@angular/core';

import { provideFavorites } from '../../../favorites.providers';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoritesFacade } from './favorites.facade';

@Component({
  imports: [FavoriteListComponent],
  providers: [FavoritesFacade, ...provideFavorites()],
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
