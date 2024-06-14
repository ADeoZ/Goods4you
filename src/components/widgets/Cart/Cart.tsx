import { useAppSelector } from "@/store";
import { getCart } from "@/store/slices/cartSlice";
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
  const { data: cartList, isLoading, error } = useAppSelector(getCart);

  return (
    <StyledCart>
      <StyledCartList>
        <LoadingWrapper isLoading={isLoading} error={error}>
          {cartList.products.length > 0 &&
            cartList.products.map((cartItem) => <CartItem key={cartItem.id} {...cartItem} />)}
        </LoadingWrapper>
      </StyledCartList>
      <StyledCartTotal>
        <StyledFieldCount label="Total count:" value={`${cartList.totalQuantity}`} />
        <StyledFieldPrice label="Total price:" value={`${cartList.total}$`} />
        <StyledFieldPriceWithDiscount
          label="Total price with discount:"
          value={`${cartList.discountedTotal}$`}
        />
      </StyledCartTotal>
    </StyledCart>
  );
};
