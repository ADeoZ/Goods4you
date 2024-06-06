import CartSvg from "@assets/svg/cart.svg?url";
import MinusSvg from "@assets/svg/minus.svg?url";
import PlusSvg from "@assets/svg/plus.svg?url";
import styled from "styled-components";
import { PrimaryButton } from "../PrimaryButton";

export const StyledSecondaryButton = styled(PrimaryButton)`
  width: 48px;
  height: 48px;
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
