import { defineConfig } from "@theholocron/cli";
import { compose, monorepo, nodeDocs, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(monorepo(nodeDocs()), wiki());
export default defineConfig({
	...preset,
	description:
		"A modern NodeJS template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/monorepo-template/",
	repo: {
		...preset.repo,
		name: "theholocron/monorepo-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo", "pnpm", "template", "typescript"],
		properties: {
			...preset.repo?.properties,
			uses_external_packages: false,
		},
	},
	tasks: [
		...preset.tasks,
		{ name: "audit", required: true, with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
	],
	extraRequiredChecks: [...preset.extraRequiredChecks, "codecov/project/package-a"],
	providers: {
		...preset.providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-copy" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
