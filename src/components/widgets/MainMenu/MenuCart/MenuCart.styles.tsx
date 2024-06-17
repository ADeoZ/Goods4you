import styled from "styled-components";
import CartSvg from "@assets/svg/cart.svg?url";

export const StyledCart = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin: -2px 5px 0 6px;
  background-image: url("${CartSvg}");
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledCartValue = styled.span`
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  bottom: -25%;
  right: -17%;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
  font-size: 0.8rem;
`;
