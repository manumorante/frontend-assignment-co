# Frontend Assignment

## Test coverage by priority

| Status | Component/Page    | File                  | Notes                                    |
| ------ | ----------------- | --------------------- | ---------------------------------------- |
| ✅     | API Layer         | api.ts                | Core data fetching logic                 |
| ✅     | Hook: useShowList | useShowList.tsx       | Pagination/data hook                     |
| ✅     | Hook: useShow     | useShow.tsx           | Data hook for details                    |
| ✅     | Store: favorites  | favorites.ts          | Global state, persistence                |
| ✅     | ErrorMessage      | ErrorMessage.tsx      | UI feedback                              |
| ✅     | Loading           | Loading.tsx           | UI feedback                              |
| ✅     | Header            | Header.tsx            | Layout/navigation                        |
| ✅     | Poster            | Poster.tsx            | Image rendering                          |
| ✅     | FavoriteAction    | FavoriteAction.tsx    | User interaction, state                  |
| ✅     | ShowFavoritesPage | ShowFavoritesPage.tsx | Favorites page logic                     |
| ⬜     | ShowDetailsPage   | ShowDetailsPage.tsx   | Placeholder, needs real test             |
| ⬜     | ShowListPage      | ShowListPage.tsx      | Recommended: has logic, should be tested |
| ⬜     | HomePage          | HomePage.tsx          | Recommended: test if logic is added      |
| ⬜     | Footer            | Footer.tsx            | Optional: presentational only            |
| ⬜     | ShowCard          | ShowCard.tsx          | Optional: presentational only            |
| ⬜     | ShowList          | ShowList.tsx          | Optional: presentational only            |
| ⬜     | EmptyState        | EmptyState.tsx        | Optional: presentational only            |
| ⬜     | Layout            | Layout.tsx            | Optional: presentational only            |
