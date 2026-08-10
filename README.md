# `@theholocron/monorepo-template`

<!-- holocron:description -->

A modern NodeJS template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.

<!-- /holocron:description -->

## Installation

```bash
pnpm install --save-dev @theholocron/monorepo-template
```

## Usage

```typescript
import { add } from "@theholocron/package-a";

add(1, 2); // 3
```

## Development

This repo uses [pnpm workspaces](https://pnpm.io/workspaces) with [Turborepo](https://turbo.build/repo) for task orchestration.

```bash
pnpm install       # install all deps
pnpm build         # build all packages
pnpm test          # test all packages
pnpm typecheck     # typecheck all packages
pnpm lint          # lint all packages
```

## Releases

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. All packages are versioned and published in lockstep. See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Documentation

Check out [The Holocron Archive](https://docs.theholocron.dev/projects/monorepo-template/) for more information.
