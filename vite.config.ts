import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
				dev: {
					logLevel: ["error", "warning"],
				},
			},
		}),
		compression({ algorithm: "brotliCompress" }),
		Inspect(),
		visualizer({ open: true, gzipSize: true }),
	],
	build: {
		minify: "terser",
		terserOptions: {
			compress: { drop_console: true },
		},
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "@chakra-ui/react"],
				},
			},
		},
	},
});
