import { CartList } from "@/models/cart";

type CartItem = CartList[number];

export type CartItemProps = CartItem & {
  decreaseHandler: (id: CartItem["id"]) => void;
  increaseHandler: (id: CartItem["id"]) => void;
  deleteHandler: (id: CartItem["id"]) => void;
};
