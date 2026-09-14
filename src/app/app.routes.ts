import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/favorites/ui/pages/favorites-page/favorites-page.component').then(
        (module) => module.FavoritesPageComponent,
      ),
    providers: [provideHttpClient()],
  },
];
