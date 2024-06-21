import styled from "styled-components";

export const StyledPreloader = styled.span`
  height: 100%;
  aspect-ratio: 1;
  border: 3px solid ${({ theme }) => theme.colors.bg.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
