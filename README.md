# Frontend Assignment

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- React Query
- Signals React
- Tailwind CSS

### Testing

- Vitest
- Testing Library

### Others

- ESLint
- Prettier
- Prettier Tailwind plugin

## Test coverage by priority

|     | Component/Page    | File                  | Notes                                    |
| --- | ----------------- | --------------------- | ---------------------------------------- |
| [x] | API Layer         | api.ts                | Core data fetching logic                 |
| [x] | Hook: useShows    | useShows.tsx          | Pagination/data hook                     |
| [x] | Hook: useShow     | useShow.tsx           | Data hook for details                    |
| [x] | Store: favorites  | favorites.ts          | Global state, persistence                |
| [x] | Warn              | Warn.tsx              | UI feedback                              |
| [x] | Loading           | Loading.tsx           | UI feedback                              |
| [x] | Header            | Header.tsx            | Layout/navigation                        |
| [x] | Poster            | Poster.tsx            | Image rendering                          |
| [x] | FavoriteAction    | FavoriteAction.tsx    | User interaction, state                  |
| [x] | ShowFavoritesPage | ShowFavoritesPage.tsx | Favorites page logic                     |
| [x] | ShowDetailsPage   | ShowDetailsPage.tsx   | Placeholder, needs real test             |
| [ ] | ShowListPage      | ShowListPage.tsx      | Recommended: has logic, should be tested |
| [ ] | HomePage          | HomePage.tsx          | Recommended: test if logic is added      |
| [ ] | Footer            | Footer.tsx            | Optional: presentational only            |
| [ ] | ShowCard          | ShowCard.tsx          | Optional: presentational only            |
| [ ] | ShowList          | ShowList.tsx          | Optional: presentational only            |
| [ ] | EmptyState        | EmptyState.tsx        | Optional: presentational only            |
| [ ] | Layout            | Layout.tsx            | Optional: presentational only            |
