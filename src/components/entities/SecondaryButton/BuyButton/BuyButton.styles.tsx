import CartSvg from "@assets/svg/cart.svg?url";
import CrossSvg from "@assets/svg/cross.svg?url";
import styled from "styled-components";
import { Preloader } from "../../Preloader";
import { StyledSecondaryButton } from "../SecondaryButton.styles";

export const StyledBuyButton = styled(StyledSecondaryButton)<{ $loading?: boolean; $error?: boolean }>`
  position: relative;
  background-image: url("${CartSvg}");
  background-size: 24px;

  & > ${Preloader} {
    height: 50%;
    border-color: ${({ theme }) => theme.colors.borders.white};
    border-bottom-color: transparent;
  }

  ${({ $loading }) =>
    $loading &&
    `
    background-image: none;
    `}

  ${({ $error }) =>
    $error &&
    `      
      background-image: none;
      animation: colorBlink .5s linear infinite;    

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url("${CrossSvg}");
        background-repeat: no-repeat;
        background-position: center;
        transform: rotate(45deg);
      }
    `}

  @keyframes colorBlink {
    50% {
      background-color: ${({ theme }) => theme.colors.text.error};
    }
  }
`;
