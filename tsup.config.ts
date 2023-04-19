import { defineConfig } from "tsup";

export default defineConfig({
	sourcemap: false,
	minify: true,
	dts: true,
	entry: ["src/**.tsx"],
	clean: true,
	treeshake: true,
	name: "Smartfish Icons",
	format: ["esm", "cjs"],
	loader: {
		".js": "jsx",
	},
});
