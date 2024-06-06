import { StyledBottomContent } from "./BottomWrapper.styles";
import { BottomWrapperProps } from "./BottomWrapper.types";

export const BottomWrapper = ({ children }: BottomWrapperProps) => (
  <StyledBottomContent>{children}</StyledBottomContent>
);
