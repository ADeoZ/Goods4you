import { Title } from "@/components/entities/Title";
import { useScrollIntoView } from "@/components/hooks";
import { getFaqList } from "@/store";
import { useRef } from "react";
import { StyledFaqList, StyledFaqSection } from "./FAQ.styles";
import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  const faqList = getFaqList();

  const titleRef = useRef<HTMLElement>(null);
  useScrollIntoView(titleRef);

  return (
    <StyledFaqSection>
      <Title id="FAQ" as="h2" color="light" ref={titleRef}>
        FAQ
      </Title>
      <StyledFaqList>
        {faqList.map((item, index) => (
          <FAQItem key={item.id} {...item} initialExpanded={index === 0} />
        ))}
      </StyledFaqList>
    </StyledFaqSection>
  );
};
