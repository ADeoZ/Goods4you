import { ProductDetailsImage } from "@/models";

export type ProductCardImagePreviewProps = ProductDetailsImage & {
  selectHandler: (image: ProductDetailsImage) => void;
  selected?: boolean;
};
