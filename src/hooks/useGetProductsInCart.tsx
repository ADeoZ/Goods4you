import { CartProduct } from "@/models/cart";
import { cartApi } from "@/store/api/cartApi";
import { useMemo } from "react";

const userId = import.meta.env.VITE_USER_ID;

export const useGetProductsInCart = (): Map<CartProduct["id"], CartProduct["quantity"]> => {
  const cartInfo = cartApi.endpoints.getCartsByUser.useQueryState(userId);
  const productsInCart = useMemo(
    () =>
      cartInfo.data?.products.reduce(
        (map: Map<CartProduct["id"], CartProduct["quantity"]>, { id, quantity }) => {
          map.set(id, quantity);
          return map;
        },
        new Map()
      ),
    [cartInfo]
  );

  return productsInCart || new Map();
};
