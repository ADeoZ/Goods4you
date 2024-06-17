import { PrimaryButton } from "@/components/entities/PrimaryButton";
import {
  StyledIntro,
  StyledIntroLogo,
  StyledIntroContent,
  StyledIntroContentTitle,
  StyledIntroContentDescription,
} from "./HeaderIntro.styles";
import { HeaderIntroProps } from "./HeaderIntro.types";

export const HeaderIntro = ({ title, description, buttonLabel, buttonClickHandler }: HeaderIntroProps) => (
  <StyledIntro>
    <StyledIntroLogo>Goods4you</StyledIntroLogo>
    <StyledIntroContent>
      <StyledIntroContentTitle>{title}</StyledIntroContentTitle>
      {description && <StyledIntroContentDescription>{description}</StyledIntroContentDescription>}
      {buttonLabel && <PrimaryButton onClick={buttonClickHandler}>{buttonLabel}</PrimaryButton>}
    </StyledIntroContent>
  </StyledIntro>
);
