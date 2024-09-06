import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         // Your preferred accent color. Indigo is closest to Starlight’s defaults.
//         accent: colors.indigo,
//         // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
//         gray: colors.zinc,
//       },
//     },
//   },
//   plugins: [starlightPlugin()],
// };

// Generated color palettes
const accent = {
  200: "#aad7a0",
  600: "#227900",
  900: "#0d3e00",
  950: "#072d00",
};
const gray = {
  100: "#f6f6f6",
  200: "#eeeeee",
  300: "#c2c2c2",
  400: "#8b8b8b",
  500: "#585858",
  700: "#383838",
  800: "#272727",
  900: "#181818",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent: colors.accent, gray: colors.gray },
    },
  },
  plugins: [starlightPlugin()],
};
