import styled from "styled-components";

export const StyledProductContentWrapper = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledProductTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const StyledProductTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const StyledProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22.5px;
  margin: 48px 0 66px;
`;

export const StyledProductControllers = styled.div`
  display: flex;
`;
