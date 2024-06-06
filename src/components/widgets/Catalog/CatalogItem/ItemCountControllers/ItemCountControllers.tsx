import { MinusButton, PlusButton } from "@/components/entities/SecondaryButton";
import { ItemCountControllersProps } from "./ItemCountControllers.types";
import { StyledItemValue } from "./ItemCountControllers.styles";

export const ItemCountControllers = ({
  currentCount,
  decreaseCountHandler,
  increaseCountHandler,
}: ItemCountControllersProps) => (
  <>
    <MinusButton aria-label={`Decrease to ${currentCount - 1} item in Cart`} onClick={decreaseCountHandler} />
    <StyledItemValue aria-hidden="true">{currentCount}</StyledItemValue>
    <PlusButton aria-label={`Increase to ${currentCount + 1} item in Cart`} onClick={increaseCountHandler} />
  </>
);
