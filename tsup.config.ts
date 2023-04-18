import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.tsx", "src/**/*.ts"],
	sourcemap: "inline",
	minify: true,
	treeshake: true,
	dts: true,
	clean: true,
	name: "Smartfish Icons",
	format: ["esm", "cjs"],
	loader: {
		".js": "jsx",
	},
	external: ["react"],
});
