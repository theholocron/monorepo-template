import { library } from "@theholocron/eslint-config/bundles/library";
import type { Linter } from "eslint";

const config: Linter.Config[] = [...library(), { ignores: ["docs/**", "**/dist/**", "**/coverage/**"] }];

export default config;
