import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "2/3": "2 / 3",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        slate: colors.blueGray,
        zinc: colors.zinc,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
});

export default config;
