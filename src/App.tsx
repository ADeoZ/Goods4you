import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

const P = styled.p`
  font-size: 2.4rem;
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <P>Hello!</P>
    </>
  );
};
