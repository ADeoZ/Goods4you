import { ItemCountControllers } from "@/components/entities/ItemCountControllers";
import { ItemDescription } from "@/components/entities/ItemDescription";
import { useCartItemCountControllers } from "@/hooks";
import { memo } from "react";
import {
  StyledCartControllers,
  StyledCartItem,
  StyledCartItemDelete,
  StyledCartItemImage,
  StyledCartItemImageWrapper,
  StyledCartItemLabel,
} from "./CartItem.styles";
import { CartItemProps } from "./CartItem.types";

export const CartItem = memo(function CartItem({ id, title, price, thumbnail, quantity }: CartItemProps) {
  const { decreaseHandler, increaseHandler, deleteHandler, isLoading, isError } = useCartItemCountControllers(
    id,
    quantity
  );

  const link = `/product/${id}`;

  return (
    <StyledCartItem>
      <StyledCartItemLabel>
        <StyledCartItemImageWrapper to={link} tabIndex={-1}>
          <StyledCartItemImage src={thumbnail} alt={title} />
        </StyledCartItemImageWrapper>
        <ItemDescription link={link} title={title} price={price} />
      </StyledCartItemLabel>
      <StyledCartControllers>
        <ItemCountControllers
          currentCount={quantity}
          decreaseCountHandler={decreaseHandler}
          increaseCountHandler={increaseHandler}
          isLoading={isLoading}
          isError={isError}
        />
        <StyledCartItemDelete onClick={deleteHandler}>Delete</StyledCartItemDelete>
      </StyledCartControllers>
    </StyledCartItem>
  );
});
