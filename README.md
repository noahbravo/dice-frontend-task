# DICE Frontend Engineer Technical Exercise

This is a React app for displaying DICE events at a particular venue. The app has an input that takes a venue name and then shows the events.

![App Preview](https://i.imgur.com/ymCMBBP.png)

---

## Requirements

- [x] The list should be initially limited to 12 events, and if more available have a “Load More” button.
- [x] The UI should be responsive and look nice on common screen sizes (desktop/tablet/mobile).
- [x] The play button on the image should only be visible if apple_music_tracks or spotify_tracks are populated with audio clip.
- [x] The “On sale” badge on image and “Get reminded” button should show on events where the on sale date is after now.

---

## Features

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Twin.macro](https://github.com/ben-rogerson/twin.macro) with:
  - [Emotion](https://emotion.sh/docs/introduction)
  - [TailwindCSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Airbnb config](https://github.com/airbnb/javascript)
  - [TypeScript](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  - [Jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
  - [Prettier](https://github.com/prettier/eslint-config-prettier)
  - And a few other ES2015+ related rules
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/)
- [Craco](https://github.com/dilanx/craco)
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
  │       ├── apiData.json
  │       └── eventData.ts
  │   ├── App.test.tsx
  │   ├── EventList.test.tsx
  │   └── EventItem.test.tsx
  │
    # TypeScript types
  ├──  @types
  │     ├── events.ts
  │     ├── fonts.d.ts
  │     ├──  twin.d.ts
  │       …
  │
    # Services that take care of the communication between the app and the API
  ├──  api
  │     ├── services
  │         └── events.ts
  │
  # React components
  ├── components/
  │   ├── EventList.tsx
  │   ├── EventItem.tsx
  │       …
  │   ├── ui/
  │       ├── Layout.tsx
  │       ├── Header.tsx
  │       …
  │
  # Custom hooks
  ├── hooks/
  │   ├── useDebounce.ts
  │   └── useGetEvents.ts
  │
  # Global styles, fonts and helpers
  ├──  styles
  │     ├── fonts.ts
  │     ├── helpers.ts
  │     └── global.ts
  │
  # Helper and formatter functions
  └──  utils
       ├── formatters.ts
       └── helpers.ts
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

- Migrate to a more stable version of [Craco](https://github.com/dilanx/craco). Current version is 7.0.0-alpha.7. Had to use this version due to the following [error](https://github.com/dilanx/craco/issues/425). Hope that a new version will also give support to Aliased imports as [create-react-app doesn't support them at the moment](https://github.com/facebook/create-react-app/issues/12047).
- Replace [react-image-and-background-image-fade](https://github.com/nckblu/react-image-and-background-image-fade) with a custom hook to handle image loading. Although `react-image-and-background-image-fade` provides a nice animation to transition between loading and loaded states, the module has some issues such as absence of types, [buggy ️lazy loading](https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage) and some minor performance loss. The module was used due to time constraints and the fact that this feature was not a requirement for the task.
- Add e2e tests with [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).
- Create smaller and reusable components such as `Button` and `ToggleContent`.
- Document components with [Storybook](https://storybook.js.org/).
- Transform `HelperText` into a [polymorfic component](https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/).
- Add missing `h1` for SEO.
- Improve Api error handling.

---

## Netlify CI/CD

This app is hosted on [Netlify](https://www.netlify.com/), taking advantage of automatic builds and instantaneously-published deploys.
[Go to the app](https://peppy-nougat-f55629.netlify.app/)
