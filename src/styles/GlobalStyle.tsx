import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { font } from "./font";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${font}

  html {
    font-size: 62.5%;
  }
`;
