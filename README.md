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

## Key Decisions

- **Custom Hooks for Data Operations**: Each data operation has its own hook for better reusability and better lifecycle control. By personal choice or habit, I've tried not to use any `useEffect`.

- **Feature-based Components**: For medium-to-large projects, it's crucial to organize features effectively. In this case, I've structured components around `shows`, emphasizing their potential use across other areas of the app.

- **Signals**: Used to manage the state of favorites across the show listing, detail page, and within the action component for adding or removing favorites.

- **Local Storage**: Created a function to persist signals in the browser, effectively replacing the persistence feature of Zustand, for example.

- **Lazy Loading**: Pages are loaded on demand using `React.lazy`, optimizing performance directly from the router.

- **Skeleton Screens**: The most relevant components display a skeleton while loading data. I absolutely love using this approach.

- **Responsive Design**: Ensured comfortable use on mobile devices by applying best practices, such as avoiding the 300ms delay on buttons and preventing zoom when focusing on inputs.

- **Tailwind CSS**: Initially, I was skeptical about _Tailwind_, but it has proven to be versatile and effective. I love it for the control it offers, though I understand companies may use other systems like CSS with BEM or CSS Modules. Even if it's not being used, it can still be utilized for quick prototyping and advancing projects. It's not just another _Bootstrap_!

- **Accessibility**: Applied best practices to enhance accessibility.

- **Prettier**: Configured to my favorite style :) An indispensable tool, especially for team collaboration, with the Tailwind CSS plugin enhancing readability through consistent class order.

- **Avoiding Shancn/UI**: I prefer not to use such libraries in companies because they require constant oversight and don't scale well. Building a custom design system ensures better consistency and control over components.

## Notes

- **Auto Barrel Files**: I usually work with an extension that creates and maintains `index.ts` files with all exports. It's very convenient for development and allows for cleaner components.

- **Real File Name**: I use a plugin to see the actual component name, even if the file is `index.tsx`. For example, `/Footer/index.tsx` appears as `Footer (components)` in my tab. Still, I prefer naming files after their components for clarity, as not all developers use this setup.

## Testing Approach

I prioritize testing the core logic and flows to build confidence in the app. This means focusing on the essentials, like ensuring that **duplicate shows aren't added**, which is crucial for making informed product decisions.

I start with components or hooks that interact with the API, especially those using **React Query**, because they are critical to the app's functionality. Then, I move on to those managing the **global state**, ensuring they perform well. Finally, I address the **dumb components**, where testing can be more flexible.

While testing some presentational components is optional, I find it valuable to use **Cypress** for lightweight end-to-end tests. This ensures user flows work smoothly in real environments, and Cypress has been a reliable tool that has saved us from many issues.

### Test Coverage by Priority

|     | Component/Page             | Description                              |
| --- | -------------------------- | ---------------------------------------- |
| [x] | API Layer                  | Core data fetching logic                 |
| [x] | Hook: useShows             | Pagination/data hook                     |
| [x] | Hook: useShow              | Data hook for details                    |
| [x] | Store: Favorites           | Global state, persistence                |
| [x] | Component: ErrorAlert      | UI feedback                              |
| [x] | Component: Loading         | UI feedback                              |
| [x] | Component: Header          | Layout/navigation                        |
| [x] | Component: Poster          | Image rendering                          |
| [x] | Component: Favorite Action | User interaction, state                  |
| [x] | Page: Favorites            | Favorites page logic                     |
| [x] | Page: Details              | Placeholder, needs real test             |
| [ ] | Page: List                 | Recommended: has logic, should be tested |
| [ ] | Page: Home                 | Recommended: test if logic is added      |
| [ ] | Component: Footer          | Optional: presentational only            |
| [ ] | Component: Card            | Optional: presentational only            |
| [ ] | Component: List            | Optional: presentational only            |
| [ ] | Component: Empty State     | Optional: presentational only            |
| [ ] | Component: Layout          | Optional: presentational only            |

## Things I would do with more time

- **Priorities with the Product Team**: The first and most important step is always to meet and, after establishing the real needs of the product, plan the next steps. _Sometimes, it’s necessary to address what’s urgent rather than what’s important_.

- **Search**: Add a show search feature, leveraging signals to retain the `query` across components.

- **Pagination**: Retain the page the user was on, and switch to conventional pagination if _Product Team_ considers it a useful feature for users. _Instagram_ would never give up its infinite scroll, but for a documentation website, for example, classic pagination is usually more appropriate.

- **Test Coverage**: There’s no login or sensitive features; otherwise, I would suggest using _Cypress_. (Product decision)

- **Micro-animations**: They are great and, when well executed, add a sense of quality. Once again, it depends on the product team.
