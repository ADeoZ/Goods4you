import { memo } from "react";
import {
  StyledProductPreviewImageWrapper,
  StyledProductPreviewImage,
} from "./ProductCardImagePreview.styles";
import { ProductCardImagePreviewProps } from "./ProductCardImagePreview.types";

export const ProductCardImagePreview = memo(function ProductCardImagePreview(
  props: ProductCardImagePreviewProps
) {
  const { src, selectHandler, alt, selected = false } = props;
  const clickHandler = () => selectHandler(src);

  return (
    <StyledProductPreviewImageWrapper
      aria-controls="selected-image"
      aria-selected="true"
      aria-label={alt}
      $selected={selected}
      onClick={clickHandler}
    >
      <StyledProductPreviewImage src={src} alt={alt} />
    </StyledProductPreviewImageWrapper>
  );
});
