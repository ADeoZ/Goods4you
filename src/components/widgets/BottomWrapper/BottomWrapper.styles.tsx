import styled from "styled-components";

export const StyledBottomContent = styled.aside`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 0 123px 22px;
  background-color: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: 1000px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
