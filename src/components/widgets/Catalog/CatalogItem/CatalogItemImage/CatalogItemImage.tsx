import { Picture } from "@/components/entities/Picture";
import { StyledItemImageWrapper } from "./CatalogItemImage.styles";
import { CatalogItemImageProps } from "./CatalogItemImage.types";

export const CatalogItemImage = ({ link, image }: CatalogItemImageProps) => (
  <StyledItemImageWrapper to={link} tabIndex={-1}>
    <Picture src={image.src} srcSmall={image.srcSmall} alt={image.alt} />
  </StyledItemImageWrapper>
);
