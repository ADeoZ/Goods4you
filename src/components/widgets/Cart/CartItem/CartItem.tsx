import { ItemCountControllers } from "@/components/entities/ItemCountControllers";
import { ItemDescription } from "@/components/entities/ItemDescription";
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

export const CartItem = memo(function CartItem({
  id,
  title,
  price,
  image,
  count,
  decreaseHandler,
  increaseHandler,
  deleteHandler,
}: CartItemProps) {
  const link = `sneakers/${id}`;
  return (
    <StyledCartItem>
      <StyledCartItemLabel>
        <StyledCartItemImageWrapper to={link} tabIndex={-1}>
          <StyledCartItemImage src={image.srcSmall} alt={image.alt} />
        </StyledCartItemImageWrapper>
        <ItemDescription link={link} title={title} price={price} />
      </StyledCartItemLabel>
      <StyledCartControllers>
        <ItemCountControllers
          currentCount={count}
          decreaseCountHandler={() => decreaseHandler(id)}
          increaseCountHandler={() => increaseHandler(id)}
        />
        <StyledCartItemDelete onClick={() => deleteHandler(id)}>Delete</StyledCartItemDelete>
      </StyledCartControllers>
    </StyledCartItem>
  );
});
