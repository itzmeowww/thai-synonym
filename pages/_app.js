import "../styles/globals.css";
import "../styles/font.css";

import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

import customTheme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
