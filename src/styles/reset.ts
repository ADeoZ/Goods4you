import { css } from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/
 v5.0.1 | 20191019
 License: none (public domain)
*/
export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a:active,
  a:hover,
  a {
    text-decoration: none;
  }

  img {
    display: block;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;
