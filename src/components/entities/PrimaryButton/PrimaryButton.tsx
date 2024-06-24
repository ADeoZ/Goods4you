import { StyledPrimaryButton } from "./PrimaryButton.styles";
import { PrimaryButtonProps } from "./PrimaryButton.types";

export const PrimaryButton = (props: PrimaryButtonProps) => (
  <StyledPrimaryButton {...props}>
    {props.children}
  </StyledPrimaryButton>
);
