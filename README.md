# sv

## Portfolio styling

The portfolio uses component-scoped Svelte CSS for page layouts and components.
Shared colors, typography, and base styles live in
[`src/routes/layout.css`](./src/routes/layout.css). No CSS framework is required.

The homepage currently features one in-progress recreation study. Its decorative
preview is not election data. Before sharing the portfolio professionally, add
your name and contact information, finish the project, and include original
publication credits and data sources on its story page.

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@1.1.1 create --template minimal --types ts --add prettier --install npm reverse
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
