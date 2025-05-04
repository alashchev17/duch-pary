import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "470px",
      },
      colors: {
        brand: {
          primary: "#958F60",
          "primary-75": "rgba(149, 143, 96, 0.75)",
          "primary-50": "rgba(149, 143, 96, 0.5)",
          "primary-25": "rgba(149, 143, 96, 0.25)",
          bg: "#233129",
          "non-accent-1": "#27372E",
          "non-accent-2": "#827D53",
        },
        "dark-green": "#233129",
        "non-accent-1": "#27372E",
        "non-accent-2": "#827D53",
        destructive: "#931915",
      },
      fontFamily: {
        spectral: ["var(--font-spectral)", "serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        nevduplenysh: ["var(--font-nevduplenysh)", "serif"],
      },
      fontSize: {
        "h1-desktop": [
          "48px",
          {
            lineHeight: "90%",
            fontWeight: "400",
          },
        ],
        "h2-desktop": [
          "64px",
          {
            lineHeight: "100%",
            fontWeight: "400",
          },
        ],
        "h3-desktop": [
          "32px",
          {
            lineHeight: "115%",
            fontWeight: "400",
          },
        ],
        "h4-desktop": [
          "24px",
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "block-name-desktop": [
          "20px",
          {
            letterSpacing: "10%",
            fontWeight: "400",
          },
        ],
        "menu-desktop": [
          "20px",
          {
            lineHeight: "90%",
            fontWeight: "600",
          },
        ],
        "body-desktop": [
          "20px",
          {
            lineHeight: "125%",
            fontWeight: "400",
          },
        ],
        "h1-mobile": [
          "26px",
          {
            lineHeight: "100%",
            fontWeight: "400",
          },
        ],
        "h2-mobile": [
          "48px",
          {
            lineHeight: "90%",
            fontWeight: "400",
          },
        ],
        "h3-mobile": [
          "20px",
          {
            lineHeight: "125%",
            fontWeight: "400",
          },
        ],
        "h4-mobile": [
          "24px",
          {
            lineHeight: "110%",
            fontWeight: "400",
          },
        ],
        "block-name-mobile": [
          "16px",
          {
            letterSpacing: "10%",
            fontWeight: "400",
          },
        ],
        "menu-mobile": [
          "16px",
          {
            lineHeight: "112.5%",
            fontWeight: "600",
          },
        ],
        "body-mobile": [
          "14px",
          {
            lineHeight: "125%",
            fontWeight: "400",
          },
        ],
      },
      borderRadius: {
        design: "8px",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      // Define a type for the color values
      type ColorValue = string | Record<string, unknown>;

      // Helper function to flatten color objects
      function flattenColors(
        obj: Record<string, ColorValue>,
        prefix = "",
      ): Record<string, string> {
        return Object.entries(obj).reduce(
          (acc: Record<string, string>, [key, value]) => {
            const newKey = prefix ? `${prefix}-${key}` : key;

            if (typeof value === "string") {
              acc[`--color-${newKey}`] = value;
            } else if (typeof value === "object" && value !== null) {
              Object.assign(
                acc,
                flattenColors(value as Record<string, ColorValue>, newKey),
              );
            }

            return acc;
          },
          {},
        );
      }

      // Get colors from theme
      const colors = theme("colors") as Record<string, ColorValue>;
      const colorVariables = flattenColors(colors);

      addBase({
        ":root": colorVariables,
      });
    }),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
};

export default config;
