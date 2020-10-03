import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    body: "Noto Sans, sans-serif",
    heading: "Noto Sans, sans-serif",
    mono: "IBM Plex Mono, monospace",
    thai: "K2D, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  icons: {
    // Add Chakra's icons
    ...theme.icons,
    // Your custom icons
  },
};
