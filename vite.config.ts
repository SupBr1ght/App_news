import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";

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
