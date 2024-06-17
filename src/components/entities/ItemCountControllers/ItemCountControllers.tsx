import { MinusButton, PlusButton } from "@/components/entities/SecondaryButton";
import { StyledControllerWrapper, StyledItemValue } from "./ItemCountControllers.styles";
import { ItemCountControllersProps } from "./ItemCountControllers.types";

export const ItemCountControllers = ({
  currentCount,
  decreaseCountHandler,
  increaseCountHandler,
  largeSize = false,
}: ItemCountControllersProps) => (
  <StyledControllerWrapper $large={largeSize}>
    <MinusButton aria-label={`Decrease to ${currentCount - 1} item in Cart`} onClick={decreaseCountHandler} />
    <StyledItemValue aria-hidden="true">{currentCount}</StyledItemValue>
    <PlusButton aria-label={`Increase to ${currentCount + 1} item in Cart`} onClick={increaseCountHandler} />
  </StyledControllerWrapper>
);
