import { ProductImage } from "@/models";
import { useCallback, useState } from "react";
import { ProductCardImagePreview } from "./ProductCardImagePreview";
import {
  StyledProductImages,
  StyledProductPreviewImagesController,
  StyledProductSelectedImage,
  StyledProductSelectedImageWrapper,
} from "./ProductCardImages.styles";
import { ProductCardImagesProps } from "./ProductCardImages.types";

export const ProductCardImages = ({ images, title }: ProductCardImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(images[0]);

  const selectHandler = useCallback((image: ProductImage) => setSelectedImage(image), []);

  return (
    <StyledProductImages>
      <StyledProductSelectedImageWrapper id="selected-image">
        <StyledProductSelectedImage src={selectedImage} alt={title} />
      </StyledProductSelectedImageWrapper>
      <StyledProductPreviewImagesController role="listbox">
        {images.map((image) => (
          <ProductCardImagePreview
            key={image}
            src={image}
            alt={`Preview for ${title}`}
            selected={selectedImage === image}
            selectHandler={selectHandler}
          />
        ))}
      </StyledProductPreviewImagesController>
    </StyledProductImages>
  );
};
