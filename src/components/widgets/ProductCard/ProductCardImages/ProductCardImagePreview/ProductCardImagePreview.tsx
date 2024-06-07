import { memo } from "react";
import {
  StyledProductPreviewImageWrapper,
  StyledProductPreviewImage,
} from "./ProductCardImagePreview.styles";
import { ProductCardImagePreviewProps } from "./ProductCardImagePreview.types";

export const ProductCardImagePreview = memo(function ProductCardImagePreview(
  props: ProductCardImagePreviewProps
) {
  const { previewSrc, alt, selectHandler, selected = false } = props;
  const clickHandler = () => selectHandler(props);

  return (
    <StyledProductPreviewImageWrapper
      aria-controls="selected-image"
      aria-selected="true"
      aria-label={`Select Preview for ${alt}`}
      $selected={selected}
      onClick={clickHandler}
    >
      <StyledProductPreviewImage src={previewSrc} alt={`Preview for ${alt}`} />
    </StyledProductPreviewImageWrapper>
  );
});
