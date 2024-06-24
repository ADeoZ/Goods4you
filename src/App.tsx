import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./router";
import { GlobalStyle, mainTheme } from "./styles";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};
