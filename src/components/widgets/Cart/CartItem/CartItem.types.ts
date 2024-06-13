import { CartProduct } from "@/models/cart";

export type CartItemProps = CartProduct & {
  decreaseHandler: (id: CartProduct["id"]) => void;
  increaseHandler: (id: CartProduct["id"]) => void;
  deleteHandler: (id: CartProduct["id"]) => void;
};
