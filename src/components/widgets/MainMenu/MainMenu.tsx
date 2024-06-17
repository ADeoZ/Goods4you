import { getCartItemsCount } from "@/store";
import { StyledMenu, StyledMenuLink } from "./MainMenu.styles";
import { MainMenuProps } from "./MainMenu.types";
import { MenuCart } from "./MenuCart/MenuCart";

export const MainMenu = ({ showCart = false }: MainMenuProps) => {
  const cartItemsCount = getCartItemsCount();

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
            <StyledMenuLink to="/cart" aria-label={`${cartItemsCount} item in Cart`}>
              Cart
              <MenuCart count={cartItemsCount} />
            </StyledMenuLink>
          </li>
        )}
      </StyledMenu>
    </nav>
  );
};
