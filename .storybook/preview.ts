import type { Preview } from "@storybook/react";

import { GlobalStyle as GlobalStyles, mainTheme } from "../src/styles";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        main: mainTheme,
      },
      defaultTheme: "main",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
