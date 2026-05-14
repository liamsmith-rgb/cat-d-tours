import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        catd: { orange: "#e87c3e", dark: "#080808", card: "#0e0e0e", border: "#181818", text: "#e8e0d4", muted: "#908878", subtle: "#555" },
      },
      fontFamily: { serif: ["Georgia", "Times New Roman", "serif"] },
    },
  },
  plugins: [],
};
export default config;
