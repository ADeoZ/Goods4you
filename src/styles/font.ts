import { css } from "styled-components";

export const font = css`
  @font-face {
    font-family: "Jost";
    src: url("./fonts/Jost.woff2") format("woff2");
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308,
      U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    font-family: "Jost", "Arial", sans-serif;
  }
`;
