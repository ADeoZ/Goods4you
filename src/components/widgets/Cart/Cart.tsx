import { useAppSelector } from "@/store";
import { useGetCartsByUserQuery } from "@/store/api/cartApi";
import { getUser } from "@/store/slices/userSlice";
import { LoadingWrapper } from "../LoadingWrapper";
import {
  StyledCart,
  StyledCartList,
  StyledCartTotal,
  StyledFieldCount,
  StyledFieldPrice,
  StyledFieldPriceWithDiscount,
} from "./Cart.styles";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const user = useAppSelector(getUser);
  const { data: cartList, error, isLoading } = useGetCartsByUserQuery(user.id, { skip: !user.id });

  return (
    <StyledCart>
      <StyledCartList>
        <LoadingWrapper
          isLoading={isLoading}
          error={error}
          isEmpty={!cartList || cartList?.products.length === 0}
        >
          {cartList &&
            cartList.products.length > 0 &&
            cartList.products.map(
              (cartItem) => cartItem.quantity > 0 && <CartItem key={cartItem.id} {...cartItem} />
            )}
        </LoadingWrapper>
      </StyledCartList>
      <StyledCartTotal>
        <StyledFieldCount label="Total count:" value={cartList?.totalQuantity ?? 0} />
        <StyledFieldPrice label="Total price:" value={Number(cartList?.total.toFixed(2) ?? 0)} />
        <StyledFieldPriceWithDiscount
          label="Total price with discount:"
          value={Number(cartList?.discountedTotal.toFixed(2) ?? 0)}
        />
      </StyledCartTotal>
    </StyledCart>
  );
};
