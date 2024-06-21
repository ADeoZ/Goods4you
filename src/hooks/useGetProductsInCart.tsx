import { CartProduct } from "@/models";
import { useAppSelector } from "@/store";
import { cartApi } from "@/store/api";
import { getUser } from "@/store/slices/userSlice";
import { useMemo } from "react";

export const useGetProductsInCart = (): Map<CartProduct["id"], CartProduct["quantity"]> => {
  const user = useAppSelector(getUser);
  const cartProducts = cartApi.endpoints.getCartsByUser.useQueryState(user.id, {
    selectFromResult: (state) => state.data?.products ?? [],
  });
  const productsInCart = useMemo(
    () =>
      cartProducts.reduce((map: Map<CartProduct["id"], CartProduct["quantity"]>, { id, quantity }) => {
        map.set(id, quantity);
        return map;
      }, new Map()),
    [cartProducts]
  );

  return productsInCart || new Map();
};
