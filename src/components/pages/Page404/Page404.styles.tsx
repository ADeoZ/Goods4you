import styled from "styled-components";

export const Page404Wrapper = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.dark};
`;
