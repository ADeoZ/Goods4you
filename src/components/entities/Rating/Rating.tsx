import { StyledRatingStar, RatingTextVisuallyHidden } from "./Rating.styles";
import { RatingProps } from "./Rating.types";

export const Rating = ({ value }: RatingProps) => (
  <>
    <div aria-hidden="true" title={`Current rating value is ${value}`}>
      {Array.from({ length: value }, (_, i) => (
        <StyledRatingStar key={i} />
      ))}
    </div>
    <RatingTextVisuallyHidden>Current rating value is {value}</RatingTextVisuallyHidden>
  </>
);
