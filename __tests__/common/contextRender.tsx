import { mainTheme } from "@/styles/theme";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

export const contextRender = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={mainTheme}>{ui}</ThemeProvider>);
};
