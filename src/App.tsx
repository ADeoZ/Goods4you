import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./router";
import { GlobalStyle, mainTheme } from "./styles";

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
