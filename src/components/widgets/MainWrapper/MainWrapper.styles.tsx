import styled from "styled-components";

export const StyledMain = styled.main`
  flex-grow: 1;
  padding: 0 20px;
`;

export const StyledMainWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;
  padding: 54px 0 60px;
`;
