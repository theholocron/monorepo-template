import { defineConfig } from "@theholocron/cli";
import { monorepo, nodeDocs } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain, docs } = monorepo(nodeDocs());
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
	providers: { ...providers, secrets: "github" },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
