import { useAppSelector } from "@/store";
import { useGetCartsByUserQuery } from "@/store/api/cartApi";
import { getUser } from "@/store/slices/userSlice";
import { StyledMenuLink } from "../MainMenu.styles";
import { MenuCart } from "../MenuCart";

export const MenuCartLink = () => {
  const user = useAppSelector(getUser);
  const { data: cart } = useGetCartsByUserQuery(user.id, { skip: !user.id });

  return (
    <StyledMenuLink to="/cart" aria-label={`${cart?.totalQuantity ?? 0} item in Cart`}>
      Cart
      <MenuCart count={cart?.totalQuantity} />
    </StyledMenuLink>
  );
};
