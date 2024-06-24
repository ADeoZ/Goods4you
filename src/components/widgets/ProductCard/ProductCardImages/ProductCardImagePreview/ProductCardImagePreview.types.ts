import { ProductImage } from "@/models";

export type ProductCardImagePreviewProps = {
  src: ProductImage;
  alt: string;
  selectHandler: (image: ProductImage) => void;
  selected?: boolean;
};
