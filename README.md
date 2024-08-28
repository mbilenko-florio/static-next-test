# Project README

**Live Preview:** [https://static-next-test.netlify.app](https://static-next-test.netlify.app)

## 🔧 Prerequisites

Ensure that Node.js v20 and [Bun](https://bun.sh/) are installed on your machine. Node.js v20 provides the latest features and optimizations, while Bun is chosen for its speed in JavaScript runtime, making it an efficient tool for both development and production.

## 🚀 Getting Started

To begin, install the project dependencies:

```bash
bun install
```

Next, start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

To build the project for production and serve the static files, run:

```bash
bun build
bun start
```

## 📖 Setup Documentation

### ⚙️ Framework

This project is built using [Next.js](https://nextjs.org/), a React framework that offers features like server-side rendering and static site generation. The project was initialized with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to provide a solid starting point with sensible defaults.

### 🎨 Formatting & Linting

For code consistency and quality, the project employs [Prettier](https://prettier.io/) for formatting and [ESLint](https://eslint.org/) for linting. These tools are configured based on the [official Next.js documentation](https://nextjs.org/docs/app/building-your-application/configuring/eslint) to ensure adherence to best practices and maintainable code.

You can manually run these tools with:

```bash
bun run lint
# or
bun run format
```

### 🪝 Commit Hooks

To maintain code quality and consistency in commits, we have set up [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged). These tools ensure that linting and formatting checks are automatically applied before each commit via a `pre-commit` hook.

Additionally, we enforce the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard using [commitlint](https://commitlint.js.org/guides/getting-started.html) in a `commit-msg` hook. This helps in maintaining a clear and structured commit history.

### 🧪 Testing

Unit tests are implemented using [Vitest](https://vitest.dev/), as recommended by the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/testing/vitest). This setup allows for efficient and reliable testing of both server and client components.

To run the tests, use:

```bash
bun run test
bun run test:coverage
```

> [!IMPORTANT]
> '_Since async Server Components are new to the React ecosystem, Vitest currently does not support them. While you can still run unit tests for synchronous Server and Client Components, we recommend using an E2E tests for async components._'
>
> See [docs](https://nextjs.org/docs/app/building-your-application/testing/vitest).

End-to-End (E2E) tests are configured with [Playwright](https://playwright.dev/), following best practices outlined in the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/testing/playwright).

Run E2E tests with:

```bash
bun run e2e
```

### 🌎 Internationalization (i18n)

There are several i18n packages available for Next.js, each offering similar approaches to localization. Some configurations can be found in branches such as [`i18n-custom`](https://github.com/EduardvonBriesen/static-next-test/tree/i18n-custom), [`i18n-next-i18n`](https://github.com/EduardvonBriesen/static-next-test/tree/i18n-next-i18next), and [`i18n-next-international`](https://github.com/EduardvonBriesen/static-next-test/tree/i18n-next-international). The most popular choice, [`next-i18next`](https://github.com/i18next/next-i18next), is implemented in the `main` branch, following this [detailed guide](https://locize.com/blog/next-app-dir-i18n/).

For route-based localization, a [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) is typically required to dynamically reroute users. However, since static exports do not support middleware, we follow an alternative approach. This involves explicit rerouting from paths, as outlined in this [guide](https://locize.com/blog/next-i18n-static/), and handling redirects in `not-found.tsx` by prefixing paths with the appropriate locale.

> [!IMPORTANT]
> This doesn't work when running the dev server, but only when starting a static build.

### ✨ Styling & Components

Styling is achieved using [Tailwind CSS](https://tailwindcss.com/), chosen for its utility-first approach that streamlines the development process. Tailwind provides robust theming capabilities through CSS variables, ensuring a consistent and easily customizable design system.

To build a reusable component library, we utilize [shadcn/ui](https://ui.shadcn.com/), which allows for the rapid creation of accessible and visually appealing components. This approach, in contrast to traditional component libraries, gives us full ownership and flexibility over our components, enabling us to tailor them precisely to our needs.
