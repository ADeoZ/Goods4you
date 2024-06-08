import { getCart } from "@/store";
import {
  StyledCart,
  StyledCartList,
  StyledCartTotal,
  StyledFieldCount,
  StyledFieldPrice,
  StyledFieldPriceWithDiscount,
} from "./Cart.styles";
import { CartItem } from "./CartItem";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CartList } from "@/models/cart";
import { Product } from "@/models";

export const Cart = () => {
  const [cartList, setCartList] = useState<CartList>([]);

  useEffect(() => {
    const cart = getCart();
    setCartList(cart);
  }, []);

  const price = useMemo(
    () =>
      cartList.reduce(
        (sum, item) => ({
          ...sum,
          total: sum.total + item.price * item.count,
          withDiscount: sum.withDiscount + item.price * (1 - item.discount / 100) * item.count,
        }),
        { total: 0, withDiscount: 0 }
      ),
    [cartList]
  );

  const decreaseHandler = useCallback(
    (itemId: Product["id"]) =>
      setCartList((prev) =>
        prev
          .map((item) => (item.id === itemId ? { ...item, count: item.count - 1 } : item))
          .filter(({ count }) => count > 0)
      ),
    []
  );

  const increaseHandler = useCallback(
    (itemId: Product["id"]) =>
      setCartList((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, count: item.count + 1 } : item))
      ),
    []
  );

  const deleteHandler = useCallback(
    (itemId: Product["id"]) => setCartList((prev) => prev.filter(({ id }) => id !== itemId)),
    []
  );

  return (
    <StyledCart>
      <StyledCartList>
        {cartList.length > 0 &&
          cartList.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              {...cartItem}
              decreaseHandler={decreaseHandler}
              increaseHandler={increaseHandler}
              deleteHandler={deleteHandler}
            />
          ))}
      </StyledCartList>
      <StyledCartTotal>
        <StyledFieldCount label="Total count:" value={`${cartList.length}`} />
        <StyledFieldPrice label="Total price:" value={`${price.total}$`} />
        <StyledFieldPriceWithDiscount label="Total price with discount:" value={`${price.withDiscount}$`} />
      </StyledCartTotal>
    </StyledCart>
  );
};
