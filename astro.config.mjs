import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	site: "https://mcpshsf.com/",
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		svelte(),
		sitemap(),
	],
	vite: {
		ssr: {
			external: ["svgo"],
		},
	},
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
