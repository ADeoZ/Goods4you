import styled from "styled-components";

export const StyledTitle = styled.h1<{ $dark: boolean }>`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.text.dark : theme.colors.text.light)};
`;
