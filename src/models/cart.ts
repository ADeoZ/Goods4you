import { Product } from "./product";

export type CartProduct = Pick<Product, "id" | "title" | "price" | "thumbnail"> & {
  quantity: number;
};

export type CartList = {
  id: number;
  userId: string;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  totalQuantity: number;
};
