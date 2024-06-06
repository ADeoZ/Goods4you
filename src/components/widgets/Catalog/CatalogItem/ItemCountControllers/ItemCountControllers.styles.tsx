import styled from "styled-components";

export const StyledItemValue = styled.div`
  display: flex;
  justify-content: center;
  width: 62px;
  height: 48px;
  padding: 15px 0;
  margin: 0 9px 0 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.inputs.bg};
  font-size: 1.4rem;
`;
