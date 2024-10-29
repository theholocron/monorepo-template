# Node Template

A Node template used within the Galaxy.

## Installation

```bash
npm install --save-dev @theholocron/node-template
```

## Usage

```typescript
import { doSomething, type SomethingOptions } from "@theholocron/node-template";

function App(options: SomethingOptions) {
	return doSomething(options);
}
```

## Documentation

<!-- document the api(s), or how to use with examples -->

The best way to find out what's available is to check out the [documentation site](https://docs.theholocron.dev/node-template/), but if you like digging through source code, then each component is typed via TypeScript.

**Note**

<!--alex disable retext-profanities-->

We use [SuperLinter](https://github.com/super-linter) for all linting checks on `push` and `pull_request` events. One of those tools is [Gitleaks](https://github.com/gitleaks/gitleaks), which protects and discovers secrets that happen to sneak into code commits. There are other ways to install Gitleaks, but you **ARE** required to install it locally as it runs on a `pre-commit` Git hook. To install, run `brew install gitleaks` or check their documentation for other options.

<!--alex enable retext-profanities-->
