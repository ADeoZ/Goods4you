import styled from "styled-components";

export const StyledProductPreviewImageWrapper = styled.button<{ $selected?: boolean }>`
  display: block;
  overflow: auto;
  position: relative;
  max-width: 70px;
  border-radius: 4px;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.text.grayLight};
    outline-offset: -1px;
  }

  &:focus-visible {
    outline: 2px solid #000;
  }

  ${({ $selected, theme }) =>
    $selected &&
    `
      outline: 3px solid ${theme.colors.text.grayDark};
      outline-offset: -3px;
    `}
`;

export const StyledProductPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
