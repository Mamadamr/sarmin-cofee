import { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          700: "#5c3a21",
          800: "#4a2f1a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
