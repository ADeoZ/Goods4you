import { ProductDetailsImage } from "@/models";
import { useCallback, useState } from "react";
import { ProductCardImagePreview } from "./ProductCardImagePreview";
import {
  StyledProductImages,
  StyledProductPreviewImagesController,
  StyledProductSelectedImage,
  StyledProductSelectedImageWrapper,
} from "./ProductCardImages.styles";
import { ProductCardImagesProps } from "./ProductCardImages.types";

export const ProductCardImages = ({ images }: ProductCardImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<ProductDetailsImage>(images[0]);

  const selectHandler = useCallback((image: ProductDetailsImage) => setSelectedImage(image), []);

  return (
    <StyledProductImages>
      <StyledProductSelectedImageWrapper id="selected-image">
        <picture>
          <source srcSet={selectedImage.fullSrcSmall} media="(max-width: 400px)" />
          <StyledProductSelectedImage src={selectedImage.fullSrc} alt={selectedImage.alt} />
        </picture>
      </StyledProductSelectedImageWrapper>
      <StyledProductPreviewImagesController role="listbox">
        {images.map((image) => (
          <ProductCardImagePreview
            key={image.id}
            {...image}
            selected={selectedImage.id === image.id}
            selectHandler={selectHandler}
          />
        ))}
      </StyledProductPreviewImagesController>
    </StyledProductImages>
  );
};
