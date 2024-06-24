import styled from "styled-components";

export const StyledProductImages = styled.div`
  max-width: 520px;
  flex-basis: 100%;
`;

export const StyledProductSelectedImageWrapper = styled.div`
  display: block;
  overflow: auto;
  position: relative;
`;

export const StyledProductPreviewImagesController = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 600px) {
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, 70px);
    justify-content: center;
  }
`;

export const StyledProductSelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
