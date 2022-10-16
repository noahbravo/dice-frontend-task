# React TypeScript Music Event List

This is a React app for displaying music events at a particular venue. The app has an input that takes a venue name and then shows the events.

![App Preview](https://i.imgur.com/ymCMBBP.png)

---

## Features

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra-ui](https://chakra-ui.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Airbnb config](https://github.com/airbnb/javascript)
  - [TypeScript](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  - [Jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
  - [Prettier](https://github.com/prettier/eslint-config-prettier)
  - And a few other ES2015+ related rules
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/)
- [axe-core](https://www.npmjs.com/package/@craco/craco)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

---

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 3000
npm run start

# generate production build
npm run build
```

## Testing

### Jest with React Testing Library

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```

---

## Formatting

```
# run prettier
npm run format
```

---

## Structure

```
./src/
  # Unit and integration tests
  ├── __tests__/
  │   ├── fixtures/
  │       └── event.json
  │   ├── integration/
  │       └── App.test.tsx
  │   └── unit/
  │       ├── Event.test.tsx
  │       └── SearchBar.test.tsx
  │
  # Services that take care of the communication between the app and the API
  ├──  api/
  │     └── services
  │         └── events.ts
  │
  # Images and other media
  ├──  assets/
  │     └── img
  │         ├── dice-logo.svg
  │         ├── event-thumb.jpg
  │         ├── play-icon.svg
  │         └── search-icon.svg
  │
  # Handles logic, wraps screens and pass down props
  ├── containers/
  │   ├── index.tsx
  │   └── Search.tsx
  │
  # Returns new state based on the current one
  ├── reducers/
  │   ├── events.ts
  │   ├── fetch.ts
  │   └── index.ts
  │
  # Style base, tokens and config
  ├── theme/
  │   ├── components/
  │       ├── dataDisplay
  │           ├── badge.ts
  │           └── index.ts
  │       ├── form
  │           ├── button.ts
  │           ├── index.ts
  │           └── input.ts
  │       ├── layout
  │           ├── container.ts
  │           └── index.ts
  │             …
  │   ├── Fonts.ts
  │   ├── index.ts
  │   ├── styles.ts
  │     …
  │
  # TypeScript types
  ├──  types/
  │     ├── events.d.ts
  │     ├── fonts.d.ts
  │     ├──  images.d.ts
  │       …
  │
  # Primitives (chakra-ui), components and screens
  ├── ui/
  │   ├── components/
  │       ├── Events
  │           ├── Card/
  │               ├── Description.tsx
  │               ├── Footer.tsx
  │               ├── Header.tsx
  │                 …
  │       ├── Layout
  │           ├── Header.tsx
  │           └── index.tsx
  │       ├── Loader
  │           ├── index.tsx
  │           └── styles.ts
  │             …
  │   └── screens/
  │       ├── index.tsx
  │       └── Search.tsx
  │
  # Custom hooks
  ├── hooks/
  │   ├── useFetch.ts
  │   ├── useLazyFetch.ts
  │   └── useComponentDidMount.ts
  │
  # Helper and formatter functions and custom hooks
  └──  utils/
  │    ├── hooks/
  │        ├── useFetch/
  │            ├── index.ts
  │            └── types.ts
  │        ├── index.ts
  │        └── useGetEvents.ts
  │           …
  │    ├── formatters.ts
  │    ├── helpers.ts
  │    └── index.ts

.public/
 ├── favicon/
 ├── fonts/
 ├── index.html
 └── robots.txt
```

---

## API

Go to [docs](https://dicefm.stoplight.io/docs/event-details-spec/aa8b542c6515b-get-list-of-events)

---

## To do

- Give support to Aliased imports as [create-react-app doesn't support them at the moment](https://github.com/facebook/create-react-app/issues/12047).
- Add e2e tests with [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).
- Document components with [Storybook](https://storybook.js.org/).
- Add missing `h1` for SEO.

---

## Netlify CI/CD

This app is hosted on [Netlify](https://www.netlify.com/), taking advantage of automatic builds and instantaneously-published deploys.
[Go to the app](https://peppy-nougat-f55629.netlify.app/)
