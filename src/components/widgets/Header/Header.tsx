import { MainLogo } from "../MainLogo";
import { MainMenu } from "../MainMenu";
import { StyledHeader, StyledHeaderWrapper } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export const Header = ({ children }: HeaderProps) => (
  <StyledHeader>
    <StyledHeaderWrapper>
      <MainLogo />
      <MainMenu showCart />
    </StyledHeaderWrapper>
    {children}
  </StyledHeader>
);
