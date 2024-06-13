import { StyledItemImage, StyledItemImageWrapper } from "./CatalogItemImage.styles";
import { CatalogItemImageProps } from "./CatalogItemImage.types";

export const CatalogItemImage = ({ image, link, alt }: CatalogItemImageProps) => (
  <StyledItemImageWrapper to={link} tabIndex={-1}>
    <StyledItemImage src={image} alt={alt} />
  </StyledItemImageWrapper>
);
