import { CartProduct } from "@/models";
import { useAppSelector } from "@/store";
import { getProducts } from "@/store/slices/cartSlice";
import { useMemo } from "react";

export const useGetProductsInCart = (): Map<CartProduct["id"], CartProduct["quantity"]> => {
  const cartProducts = useAppSelector(getProducts);
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
