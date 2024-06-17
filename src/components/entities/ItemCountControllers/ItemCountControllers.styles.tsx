import styled from "styled-components";

export const StyledControllerWrapper = styled.div<{ $large?: boolean }>`
  width: ${({ $large }) => ($large ? "200px" : "175px")};
  height: ${({ $large }) => ($large ? "67px" : "48px")};
  display: flex;
`;

export const StyledItemValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 15px 0;
  margin: 0 9px 0 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.inputs.bg};
  font-size: 1.4rem;
`;
