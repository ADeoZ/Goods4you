import { useState } from "react";
import {
  StyledFaqAnimation,
  StyledFaqAnimationWrapper,
  StyledFaqItem,
  StyledFaqItemAnswer,
  StyledFaqItemControlButton,
  StyledFaqItemTitle,
  StyledFaqTransformWrapper,
} from "./FAQItem.styles";
import { FAQItemProps } from "./FAQItem.types";

export const FAQItem = ({ id, question, answer }: FAQItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const expandHandler = () => setExpanded((prev) => !prev);

  return (
    <StyledFaqItem>
      <StyledFaqItemControlButton
        aria-label={question}
        aria-expanded={expanded}
        aria-controls={`Question ${id}`}
        $expanded={expanded}
        onClick={expandHandler}
      />
      <StyledFaqItemTitle id={`Question ${id}`}>{question}</StyledFaqItemTitle>
      <StyledFaqAnimationWrapper $expanded={expanded}>
        <StyledFaqAnimation>
          <StyledFaqTransformWrapper>
            <StyledFaqItemAnswer>{answer}</StyledFaqItemAnswer>
          </StyledFaqTransformWrapper>
        </StyledFaqAnimation>
      </StyledFaqAnimationWrapper>
    </StyledFaqItem>
  );
};
