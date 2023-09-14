# Pet Card

This is a [T3 Stack](https://create.t3.gg/) project.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

## Tech stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Turso](https://turso.tech)

## Getting started

### Prerequisites

You need to have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Turso](https://docs.turso.tech/tutorials/get-started-turso-cli/step-01-installation)

### Installation

Run the following command to install the dependencies:

```bash
yarn install
```

It should create a `local.db` file at the root of the project, which is the SQLite database used by the app in development.

The `postinstall` script will run automatically and create the database tables.

TODO: Add a seed function to create a user and a pet.

### Running the app

Run the following command to start the app:

```bash
yarn dev
```

The app should be running at [http://localhost:3000](http://localhost:3000).

You can also run the Drizzle studio to view the database at [http://0.0.0.0:4983](http://0.0.0.0:4983):

```bash
yarn db:studio
```

### Running the tests

TODO: Add tests

### Git

This project uses [commitizen](https://github.com/commitizen/cz-cli) for commit conventions, [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) for changelogs, and [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages.

Run the following command to commit your changes:

```bash
yarn commit
```