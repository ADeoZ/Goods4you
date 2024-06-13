import { Product } from "./product";

export type CatalogItem = Pick<Product, "id" | "title" | "price" | "thumbnail">;
