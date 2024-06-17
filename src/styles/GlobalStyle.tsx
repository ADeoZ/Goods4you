import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import font from "./font.module.css";

export const GlobalStyle = createGlobalStyle`
  ${font}
  ${reset}

  html {
    font-size: 62.5%;
  }  

  body {
    font-family: "Jost", "Arial", sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100svh;
  }
`;
