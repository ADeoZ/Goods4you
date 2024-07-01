import { StyledMenu, StyledMenuLink } from "./MainMenu.styles";
import { MainMenuProps } from "./MainMenu.types";
import { MenuCartLink } from "./MenuCartLink";

export const MainMenu = ({ showCart = false }: MainMenuProps) => (
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
          <MenuCartLink />
        </li>
      )}
    </StyledMenu>
  </nav>
);
