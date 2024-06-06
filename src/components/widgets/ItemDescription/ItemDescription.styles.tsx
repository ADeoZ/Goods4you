import styled from "styled-components";

export const StyledItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.dark};
  overflow: hidden;
`;

export const StyledItemTitle = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    white-space: normal;
    overflow: auto;
  }
`;

export const StyledItemPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.4;
`;
