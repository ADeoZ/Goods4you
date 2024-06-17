import styled from "styled-components";

export const StyledCatalog = styled.section`
  padding: 40px 0 0;
`;

export const StyledCatalogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px);
  justify-content: center;
  gap: 40px 35px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 370px;
    margin: 0 auto;
  }
`;

export const StyledCatalogShowMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
