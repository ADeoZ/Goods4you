import { Title } from "@/components/entities/Title";
import { getFaqList } from "@/store";
import { StyledFaqSection, StyledFaqList } from "./FAQ.styles";
import { FAQItem } from "./FAQItem";

export const FAQ = () => {
  const faqList = getFaqList();

  return (
    <StyledFaqSection>
      <Title id="FAQ" as="h2" color="light">
        FAQ
      </Title>
      <StyledFaqList>
        {faqList.map((item) => (
          <FAQItem key={item.id} {...item} />
        ))}
      </StyledFaqList>
    </StyledFaqSection>
  );
};
