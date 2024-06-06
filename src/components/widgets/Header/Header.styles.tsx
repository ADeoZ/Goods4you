import styled from "styled-components";

export const StyledHeader = styled.header`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: 600px) {
    height: auto;
    padding: 20px;
  }
`;

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 5px 0;
  border-bottom: solid 1px rgb(255, 255, 255, 0.5);

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;
