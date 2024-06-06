import { ForwardedRef, forwardRef } from "react";
import { StyledTitle } from "./Title.styles";
import { TitleProps } from "./Title.types";

export const Title = forwardRef(function Title(
  { id, as, children, color = "dark" }: TitleProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <StyledTitle id={id} as={as} $dark={color === "dark"} ref={ref}>
      {children}
    </StyledTitle>
  );
});
