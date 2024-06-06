import { MainLogo } from "../MainLogo";
import { MainMenu } from "../MainMenu";
import { StyledFooter, StyledFooterWrapper } from "./Footer.styles";

export const Footer = () => (
  <StyledFooter>
    <StyledFooterWrapper>
      <MainLogo />
      <MainMenu showCart={false} />
    </StyledFooterWrapper>
  </StyledFooter>
);
