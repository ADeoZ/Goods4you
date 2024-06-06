import { StyledMain, StyledMainWrapper } from "./MainWrapper.styles";
import { MainWrapperProps } from "./MainWrapper.types";

export const MainWrapper = ({ children }: MainWrapperProps) => (
  <StyledMain>
    <StyledMainWrapper>{children}</StyledMainWrapper>
  </StyledMain>
);
