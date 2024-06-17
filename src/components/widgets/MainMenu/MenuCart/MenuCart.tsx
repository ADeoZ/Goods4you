import { StyledCart, StyledCartValue } from "./MenuCart.styles";
import { MenuCartProps } from "./MenuCart.types";

export const MenuCart = ({ count }: MenuCartProps) => (
  <StyledCart aria-hidden="true">
    <StyledCartValue>{count}</StyledCartValue>
  </StyledCart>
);
