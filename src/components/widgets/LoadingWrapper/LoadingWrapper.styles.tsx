import styled from "styled-components";

export const StyledLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-weight: 600;
  font-size: 4rem;
`;

export const StyledLoadingStatus = styled.span`
  opacity: 1;
  animation: blink 1s linear infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const StyledErrorStatus = styled.span`
  color: ${({ theme }) => theme.colors.text.error};
`;
