import { StyledCart, StyledCartValue } from "./MenuCart.styles";
import { MenuCartProps } from "./MenuCart.types";

export const MenuCart = ({ count }: MenuCartProps) => (
  <StyledCart aria-hidden="true">{count && <StyledCartValue>{count}</StyledCartValue>}</StyledCart>
);
