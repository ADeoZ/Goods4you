import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 18px 20px 19px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;
