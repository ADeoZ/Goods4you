import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 67px;
  padding: 2.1rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.inputs.bg};
  border-width: 0;
  font-size: 1.6rem;

  &::placeholder {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.grayLight};
  }

  &:hover {
    outline: solid 1px ${({ theme }) => theme.colors.inputs.hover};
  }

  &:focus {
    outline: solid 2px ${({ theme }) => theme.colors.borders.black};
  }
`;
