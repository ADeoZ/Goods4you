import { MainLogo } from "../MainLogo";
import { MainMenu } from "../MainMenu";
import { StyledHeader, StyledHeaderWrapper } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export const Header = ({ children, showMenu = true }: HeaderProps) => (
  <StyledHeader>
    <StyledHeaderWrapper>
      <MainLogo />
      {showMenu && <MainMenu showCart />}
    </StyledHeaderWrapper>
    {children}
  </StyledHeader>
);
