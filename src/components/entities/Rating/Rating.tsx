import { StyledRatingStar, RatingTextVisuallyHidden } from "./Rating.styles";
import { RatingProps } from "./Rating.types";

export const Rating = ({ value }: RatingProps) => (
  <>
    <div aria-hidden="true" title={`Current rating value is ${value}`} data-testid="RatingComponent">
      {Array.from({ length: Math.round(value) }, (_, i) => (
        <StyledRatingStar key={i} data-testid="RatingStar" />
      ))}
    </div>
    <RatingTextVisuallyHidden>Current rating value is {value}</RatingTextVisuallyHidden>
  </>
);
