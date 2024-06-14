import { useGetCartsByUserQuery } from "@/store/api/cartApi";
import { StyledMenu, StyledMenuLink } from "./MainMenu.styles";
import { MainMenuProps } from "./MainMenu.types";
import { MenuCart } from "./MenuCart/MenuCart";
import { useAppSelector } from "@/store";
import { getCart } from "@/store/slices/cartSlice";

export const MainMenu = ({ showCart = false }: MainMenuProps) => {
  useGetCartsByUserQuery();
  const { data: cart } = useAppSelector(getCart);

  return (
    <nav>
      <StyledMenu>
        <li>
          <StyledMenuLink to="/#Catalog">Catalog</StyledMenuLink>
        </li>
        <li>
          <StyledMenuLink to="/#FAQ">FAQ</StyledMenuLink>
        </li>
        {showCart && (
          <li>
            <StyledMenuLink to="/cart" aria-label={`${cart.totalQuantity} item in Cart`}>
              Cart
              <MenuCart count={cart.totalQuantity} />
            </StyledMenuLink>
          </li>
        )}
      </StyledMenu>
    </nav>
  );
};
