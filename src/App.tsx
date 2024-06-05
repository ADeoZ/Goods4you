import styled from "styled-components";
import Star from "@assets/svg/star.svg?raw";

const P = styled.p`
  font-size: 2.4rem;
`;

export const App = () => {
  return (
    <>
      <P>My cart!</P>
      <div dangerouslySetInnerHTML={{ __html: Star }} />
    </>
  );
};
