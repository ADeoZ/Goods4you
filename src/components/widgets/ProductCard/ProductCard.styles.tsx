import styled from "styled-components";

export const StyledProductCard = styled.article`
  margin-bottom: 49px;
`;

export const StyledProductCardWrapper = styled.div`
  display: flex;
  gap: 43px;
  margin-top: 55px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
