import { StyledItemContentWrapper, StyledItemTitle, StyledItemPrice } from "./ItemDescription.styles";
import { ItemDescriptionProps } from "./ItemDescription.types";

export const ItemDescription = ({ link, title, price }: ItemDescriptionProps) => (
  <StyledItemContentWrapper>
    <StyledItemTitle to={link}>{title}</StyledItemTitle>
    <StyledItemPrice>{`${price} $`}</StyledItemPrice>
  </StyledItemContentWrapper>
);
