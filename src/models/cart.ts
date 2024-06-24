import { Product } from "./product";

export type CartProduct = Pick<Product, "id" | "title" | "price" | "thumbnail"> & { quantity: number };

export type CartList = {
  id: string;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  totalQuantity: number;
};
