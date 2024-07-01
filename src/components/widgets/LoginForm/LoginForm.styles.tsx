import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 100%;
  max-width: 628px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  margin: 55px 0;
  padding: 60px 47px;
  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: 4px;
`;

export const StyledLoginError = styled.span`
  margin: -25px 0px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.error};
`;
