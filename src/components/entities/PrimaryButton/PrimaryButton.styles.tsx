import styled from "styled-components";

export const StyledButton = styled.button<{ $disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text.light};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttons.hover};
  }

  &:active {
    font-size: 1.5rem;
  }

  ${({ $disabled, theme }) => $disabled && `background-color: ${theme.colors.text.grayDark}`};
`;

export const StyledPrimaryButton = styled(StyledButton)`
  width: 100%;
  max-width: 200px;
  height: 67px;
  padding: 2.2rem 4.65rem;
`;
