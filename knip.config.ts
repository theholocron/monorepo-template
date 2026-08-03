import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			entry: ["commitlint.config.ts", "holocron.config.ts"],
			project: ["*.ts"],
		},
		"packages/*": {
			entry: ["src/index.ts"],
			project: ["src/**/*.ts"],
		},
	},
	ignoreDependencies: [
		"@theholocron/tsconfig",
		"@theholocron/commitlint-config",
		"@theholocron/lint-staged-config",
		"husky",
		"turbo",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
