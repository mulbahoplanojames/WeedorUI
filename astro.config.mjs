import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.png",
      title: "WeedorUI",
      social: {
        github: "https://github.com/mulbahoplanojames",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "getting_started/gettingstarted" },
          ],
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  devOptions: {
    devToolbar: false, // Disable the dev toolbar to fix the error
  },
});
