import { Product, ProductMainImage } from "./product";

export type CatalogItem = Pick<Product, "id" | "title" | "price"> & { image: ProductMainImage };
