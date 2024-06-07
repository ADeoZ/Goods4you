import styled from "styled-components";

export const StyledField = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledFieldLabel = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.grayLight};
  white-space: nowrap;
`;

export const StyledFieldValue = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.dark};
`;
