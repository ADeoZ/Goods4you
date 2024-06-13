import { Product } from "@/models";
import { useGetCartsByUserQuery } from "@/store/api/cartApi";
import { useCallback } from "react";
import {
  StyledCart,
  StyledCartList,
  StyledCartTotal,
  StyledFieldCount,
  StyledFieldPrice,
  StyledFieldPriceWithDiscount,
} from "./Cart.styles";
import { CartItem } from "./CartItem";
import { LoadingWrapper } from "../LoadingWrapper";

const userId = import.meta.env.VITE_USER_ID;

export const Cart = () => {
  const { data: cartList, error, isLoading } = useGetCartsByUserQuery(userId);

  const decreaseHandler = useCallback((itemId: Product["id"]) => console.log("decrease", itemId), []);

  const increaseHandler = useCallback((itemId: Product["id"]) => console.log("increase", itemId), []);

  const deleteHandler = useCallback((itemId: Product["id"]) => console.log("delete", itemId), []);

  return (
    <StyledCart>
      <StyledCartList>
        <LoadingWrapper isLoading={isLoading} error={error}>
          {cartList?.products &&
            cartList?.products.length > 0 &&
            cartList.products.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                {...cartItem}
                decreaseHandler={decreaseHandler}
                increaseHandler={increaseHandler}
                deleteHandler={deleteHandler}
              />
            ))}
        </LoadingWrapper>
      </StyledCartList>
      <StyledCartTotal>
        <StyledFieldCount label="Total count:" value={`${cartList?.totalQuantity ?? 0}`} />
        <StyledFieldPrice label="Total price:" value={`${cartList?.total ?? 0}$`} />
        <StyledFieldPriceWithDiscount
          label="Total price with discount:"
          value={`${cartList?.discountedTotal ?? 0}$`}
        />
      </StyledCartTotal>
    </StyledCart>
  );
};
