## scaffolding

src/
└── app/
    ├── core/
    │   ├── auth/
    │   ├── http/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── config/
    │   └── errors/
    │
    ├── shared/
    │   ├── ui/
    │   │   ├── button/
    │   │   ├── card/
    │   │   └── modal/
    │   ├── directives/
    │   ├── pipes/
    │   └── utils/
    │
    ├── features/
    │   ├── users/
    │   │   ├── domain/
    │   │   ├── application/
    │   │   ├── data/
    │   │   └── ui/
    │   │
    │   ├── products/
    │   │   ├── domain/
    │   │   ├── application/
    │   │   ├── data/
    │   │   └── ui/
    │
    ├── app.routes.ts
    └── app.config.ts

## scaffolding de una feature

src/
└── app/
    └── features/
        └── favorites/
            ├── domain/
            │   ├── entities/
            │   │   └── favorite.ts
            │   └── repositories/
            │       └── favorite.repository.ts
            │
            ├── application/
            │   └── use-cases/
            │       └── get-favorites.use-case.ts
            │
            ├── data/
            │   ├── api/
            │   │   └── favorite-api.repository.ts
            │   ├── dto/
            │   │   └── favorite-response.dto.ts
            │   └── mappers/
            │       └── favorite.mapper.ts
            │
            └── ui/
                └── pages/
                    └── favorites-page/
                        ├── favorites-page.component.ts
                        ├── favorites.facade.ts
                        ├── favorites.viewmodel.ts
                        └── components/
                            └── favorite-list/
                                └── favorite-list.component.ts



## simplificado

features/
└── favorites/
    └── pages/
        └── favorites-page/
            ├── domain/
            │   ├── favorite.viewmodel.ts
            │   ├── create-favorite.command.ts
            │   ├── favorite.repository.ts
            │   └── can-execute-favorite.ts
            │
            ├── data/
            │   ├── favorite-api.repository.ts
            │   ├── favorite-response.dto.ts
            │   └── favorite.mapper.ts
            │
            ├── components/
            │   └── favorite-list/
            │       └── favorite-list.component.ts
            │
            ├── favorites.facade.ts
            └── favorites-page.component.ts
