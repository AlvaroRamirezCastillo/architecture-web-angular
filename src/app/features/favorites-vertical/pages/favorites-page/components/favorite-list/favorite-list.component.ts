import { Component, input, output } from '@angular/core';

export interface FavoriteListItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly route: string;
}

@Component({
  selector: 'app-favorite-list',
  template: `
    <ul class="favorite-list" aria-label="Favoritos disponibles">
      @for (favorite of items(); track favorite.id) {
        <li class="favorite-list__item">
          <button
            type="button"
            class="favorite-list__button"
            [attr.aria-label]="'Seleccionar ' + favorite.title"
            (click)="selectFavorite(favorite)"
          >
            <span class="favorite-list__title">{{ favorite.title }}</span>
            <span class="favorite-list__description">{{ favorite.description }}</span>
            <span class="favorite-list__route">{{ favorite.route }}</span>
          </button>
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
    }

    .favorite-list {
      display: grid;
      gap: 12px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .favorite-list__item {
      display: block;
    }

    .favorite-list__button {
      background: #ffffff;
      border: 1px solid #d8dee8;
      border-radius: 8px;
      color: inherit;
      cursor: pointer;
      display: grid;
      gap: 6px;
      font: inherit;
      min-height: 116px;
      padding: 16px;
      text-align: left;
      width: 100%;
    }

    .favorite-list__button:hover {
      border-color: #25615f;
    }

    .favorite-list__button:focus-visible {
      outline: 3px solid #8ecae6;
      outline-offset: 3px;
    }

    .favorite-list__title {
      color: #172033;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.3;
      margin: 0;
    }

    .favorite-list__description {
      color: #475569;
      font-size: 0.95rem;
      line-height: 1.45;
      margin: 0;
    }

    .favorite-list__route {
      color: #25615f;
      font-size: 0.82rem;
      font-weight: 700;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }
  `,
})
export class FavoriteListComponent {
  readonly items = input.required<readonly FavoriteListItem[]>();
  readonly favoriteSelected = output<FavoriteListItem>();

  protected selectFavorite(favorite: FavoriteListItem): void {
    this.favoriteSelected.emit(favorite);
  }
}
