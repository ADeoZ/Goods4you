import { CartProduct } from "@/models";
import { useAppSelector } from "@/store";
import { cartApi } from "@/store/api";
import { useUpdateCartMutation } from "@/store/api/cartApi";
import { getUser } from "@/store/slices/userSlice";
import { useCallback } from "react";

export const useCartItemCountControllers = (itemId: number, currentQuantity: number) => {
  const user = useAppSelector(getUser);
  const { data: cartInfo } = cartApi.endpoints.getCartsByUser.useQueryState(user.id);
  const [updateCart, { isLoading, isError }] = useUpdateCartMutation();

  const updateCartItem = useCallback(
    (newQuantity: number) => {
      if (!cartInfo) return;
      let isNewProduct = true;
      const updatedProducts: Pick<CartProduct, "id" | "quantity">[] = cartInfo.products.map(
        ({ id, quantity }) => {
          if (id === itemId) {
            isNewProduct = false;
            return { id, quantity: newQuantity };
          }
          return { id, quantity };
        }
      );
      if (isNewProduct) updatedProducts.push({ id: itemId, quantity: newQuantity });
      updateCart({ id: cartInfo.id, products: updatedProducts });
    },
    [cartInfo, updateCart, itemId]
  );

  const decreaseHandler = useCallback(
    () => updateCartItem(currentQuantity - 1),
    [currentQuantity, updateCartItem]
  );
  const increaseHandler = useCallback(
    () => updateCartItem(currentQuantity + 1),
    [currentQuantity, updateCartItem]
  );
  const deleteHandler = useCallback(() => updateCartItem(0), [updateCartItem]);
  const buyHandler = useCallback(() => updateCartItem(1), [updateCartItem]);

  return { decreaseHandler, increaseHandler, deleteHandler, buyHandler, isLoading, isError };
};
