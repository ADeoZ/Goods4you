import { StyledItemImageWrapper, StyledItemImage } from "./CatalogItemImage.styles";
import { CatalogItemImageProps } from "./CatalogItemImage.types";

export const CatalogItemImage = ({ link, image }: CatalogItemImageProps) => (
  <StyledItemImageWrapper to={link} tabIndex={-1}>
    <picture>
      <source srcSet={image.srcSmall} media="(max-width: 400px)" />
      <StyledItemImage src={image.src} alt={image.alt} />
    </picture>
  </StyledItemImageWrapper>
);
