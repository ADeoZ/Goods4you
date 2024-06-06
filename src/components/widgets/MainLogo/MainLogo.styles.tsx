import styled from "styled-components";

export const StyledLogo = styled.a`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.light};

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;
