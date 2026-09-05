import { defineConfig } from "@theholocron/cli";
import { compose, monorepo, nodeDocs, wikiCapability as wiki } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain, docs } = compose(monorepo(nodeDocs()), wiki());
export default defineConfig({
	description:
		"A modern NodeJS template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/monorepo-template/",
	org,
	domain,
	docs,
	repo: {
		name: "theholocron/monorepo-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo", "pnpm", "template", "typescript"],
		...repo,
		requiredChecks: [...repo.requiredChecks, "audit / Audit the bundle size", "codecov/project/package-a"],
		properties: {
			...repo.properties,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "audit", with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
	],
	providers: {
		...providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-copy" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
