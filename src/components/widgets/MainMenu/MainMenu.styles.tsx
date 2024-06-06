import styled from "styled-components";

export const StyledMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3.35rem;
`;

export const StyledMenuLink = styled.a`
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.light};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.grayDark};
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.text.grayLight};
  }
`;
