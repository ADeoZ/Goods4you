import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./router";
import { GlobalStyle, mainTheme } from "./styles";

// 404 страница
// добавить gh-pages

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
