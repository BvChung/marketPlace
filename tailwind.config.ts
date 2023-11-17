import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightText: "#050505",
        lightBackground: "#fafafa",
        lightPrimary: "#99999f",
        lightSecondary: "#e5e5e6",
        lightAccent: "#7b7d84",
        darkText: "#fafafa",
        darkBackground: "#050505",
        darkPrimary: "#99999f",
        darkSecondary: "#19191a",
        darkAccent: "#b0b1b5",
        gray1: "#2F313A",
        gray2: "#33353F",
        gray3: "#363842",
        gray4: "#444653",
        gray5: "#bdbdbd",
        gray6: "#ECECEC",
        gray7: "#EBEBEB",
        gray8: "#f5f5f5",
        offwhite: "#f9fafb",
        offwhite2: "#F5F5F5",
        offwhite3: "#f3f3f4",
        menu: "#0e0e10",
        dark1: "#111111",
        dark2: "#121212",
        dark3: "#141414",
        dark4: "#18181b",
        dark5: "#1c1c1c",
        dark6: "#171719",
        dark7: "#19191B",
        dark8: "#1C1C1D",
        dark9: "#1e1e20",
        dark10: "#202124",
      },
    },
  },
  plugins: [],
};

export default config;
