import { StyledTitle } from "./Title.styles";
import { TitleProps } from "./Title.types";

export const Title = ({ id, as, children, color = "dark" }: TitleProps) => (
  <StyledTitle id={id} as={as} $dark={color === "dark"}>
    {children}
  </StyledTitle>
);
