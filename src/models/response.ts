import { CartList } from "./cart";
import { Product } from "./product";

export type ListResponse = {
  total: number;
  skip: number;
  limit: number;
};

export type ProductsListResponse = ListResponse & { products: Product[] };

export type CartListResponse = ListResponse & { carts: CartList[] };
