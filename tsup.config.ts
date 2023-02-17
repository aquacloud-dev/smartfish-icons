import { defineConfig } from "tsup";

export default defineConfig({
	sourcemap: false,
	minify: true,
	dts: true,
	clean: true,
	name: "Smartfish Icons",
	format: ["esm", "cjs"],
	loader: {
		".js": "jsx",
	},
});
