import { Product, ProductMainImage } from "./product";

export type CartList = (Pick<Product, "id" | "title" | "price" | "discount"> & {
  image: ProductMainImage;
  count: number;
})[];
