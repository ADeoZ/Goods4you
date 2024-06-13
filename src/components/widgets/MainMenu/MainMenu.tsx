import { useGetCartsByUserQuery } from "@/store/api/cartApi";
import { StyledMenu, StyledMenuLink } from "./MainMenu.styles";
import { MainMenuProps } from "./MainMenu.types";
import { MenuCart } from "./MenuCart/MenuCart";

const userId = import.meta.env.VITE_USER_ID;

export const MainMenu = ({ showCart = false }: MainMenuProps) => {
  const { data: cartList } = useGetCartsByUserQuery(userId);

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
            <StyledMenuLink to="/cart" aria-label={`${cartList?.totalQuantity ?? 0} item in Cart`}>
              Cart
              <MenuCart count={cartList?.totalQuantity} />
            </StyledMenuLink>
          </li>
        )}
      </StyledMenu>
    </nav>
  );
};
