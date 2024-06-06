import { PrimaryButton } from "@/components/entities/PrimaryButton";
import {
  StyledIntro,
  StyledIntroLogo,
  StyledIntroContent,
  StyledIntroContentTitle,
  StyledIntroContentDescription,
} from "./HeaderIntro.styles";
import { HeaderIntroProps } from "./HeaderIntro.types";

export const HeaderIntro = ({ title, description, buttonLabel }: HeaderIntroProps) => (
  <StyledIntro>
    <StyledIntroLogo>Goods4you</StyledIntroLogo>
    <StyledIntroContent>
      <StyledIntroContentTitle>{title}</StyledIntroContentTitle>
      {description && <StyledIntroContentDescription>{description}</StyledIntroContentDescription>}
      {buttonLabel && <PrimaryButton>{buttonLabel}</PrimaryButton>}
    </StyledIntroContent>
  </StyledIntro>
);
