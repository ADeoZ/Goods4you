import { Product } from "@/models";

export type ProductContentProps = Omit<Product, "images" | "thumbnail">;
