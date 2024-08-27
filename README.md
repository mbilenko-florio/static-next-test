This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🔧 Prerequisites

Make sure Node v20 and [Bun](https://bun.sh/) are installed on your machine.

## 🚀 Getting Started

First, install the dependencies:

```bash
bun install
```

Then run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the statically built files run:

```bash
bun build
bun start
```

# 📖 Setup Documentation

## 🎨 Formatting & Linting

This project uses [Prettier](https://prettier.io/) for code formatting end [ESlint](https://eslint.org/) for linting. The setup closely follows the [official documentation](https://nextjs.org/docs/app/building-your-application/configuring/eslint).

They can be run manually using:

```bash
bun run lint
# or
bun run format
```

## 🪝 Commit Hooks

To ensure clean and consistent commits, [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged) are setup to lint and format all commits in a `pre-commit` hook.

Additionally the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) standard is enforced using [commitlint](https://commitlint.js.org/guides/getting-started.html) in a `commit-msg` hook.

## 🧪 Testing

Unit tests are setup using [vitest](https://vitest.dev/), following the [official guide](https://nextjs.org/docs/app/building-your-application/testing/vitest).

```bash
bun run test
bun run test:coverage
```

> [!WARNING]
> '_Since async Server Components are new to the React ecosystem, Vitest currently does not support them. While you can still run unit tests for synchronous Server and Client Components, we recommend using an E2E tests for async components._'
>
> See [docs](https://nextjs.org/docs/app/building-your-application/testing/vitest).

End-to-End tests are setup with [playwright](https://playwright.dev/), again following the [documentation](https://nextjs.org/docs/app/building-your-application/testing/playwright).

```bash
bun run e2e
```

## 🌎 Internationalization

There exist numerous i18n packages for Next.js, all of them follow similar approaches, and for some of them the setup can be found on open branches (e.g. [`i18n-custom`](https://github.com/EduardvonBriesen/static-next-test/tree/i18n-custom), [`i18n-next-i18n`](https://github.com/EduardvonBriesen/static-next-test/tree/i18n-next-i18next), [`i18n-next-international`](https://github.com/EduardvonBriesen/static-next-test/tree/i18n-next-international)).
The most popular choice was [`next-i18next`](https://github.com/i18next/next-i18next), so that is the implementation found on `main`, following this [guide](https://locize.com/blog/next-app-dir-i18n/).

The standard implementation of localization of with routes requires a [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware), to dynamically reroute users. This is not supported when using the static export of the Next app.
To address this we have to explicitly reroute from paths, as this [guide](https://locize.com/blog/next-i18n-static/) demonstrates.
For a more scalable solution, redirects are handled in the `not-found.tsx`, where paths are prefixed with an appropriate locale.

> [!IMPORTANT]
> This doesn't work when running the dev server, but only when starting a static build.
