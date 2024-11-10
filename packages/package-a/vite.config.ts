import * as path from "node:path";
import { codecovVitePlugin } from "@codecov/vite-plugin";
import { defineConfig } from "vite";

const NAME = "utils-array";

/*
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
	plugins: [
		codecovVitePlugin({
			enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
			bundleName: NAME,
			gitService: "github",
			uploadToken: process.env.CODECOV_TOKEN,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"), // Entry point of your library
			name: NAME,
			formats: ["es", "cjs"], // Specify formats (ESM and CommonJS)
			fileName: (format) => `${NAME}.${format}.js`,
		},
		rollupOptions: {
			external: [], // Externalize any specific Node dependencies
			output: {
				globals: {
					// Define globals for any externalized dependencies
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // Adjust as needed
		},
	},
	test: {
		globals: true,
		environment: "node", // Use Node environment for testing
	},
});
