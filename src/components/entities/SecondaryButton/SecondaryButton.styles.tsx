import CartSvg from "@assets/svg/cart.svg?url";
import MinusSvg from "@assets/svg/minus.svg?url";
import PlusSvg from "@assets/svg/plus.svg?url";
import styled from "styled-components";
import { StyledButton } from "../PrimaryButton";

export const StyledSecondaryButton = styled(StyledButton)`
  min-width: 48px;
  aspect-ratio: 1;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledBuyButton = styled(StyledSecondaryButton)`
  background-image: url("${CartSvg}");
  background-size: 24px;
`;

export const StyledMinusButton = styled(StyledSecondaryButton)`
  background-image: url("${MinusSvg}");
`;

export const StyledPlusButton = styled(StyledSecondaryButton)`
  background-image: url("${PlusSvg}");
`;
