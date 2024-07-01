import { MinusButton, PlusButton } from "@/components/entities/SecondaryButton";
import { useEffect, useState } from "react";
import { Preloader } from "../Preloader";
import { StyledControllerWrapper, StyledItemValue } from "./ItemCountControllers.styles";
import { ItemCountControllersProps } from "./ItemCountControllers.types";

export const ItemCountControllers = ({
  currentCount,
  decreaseCountHandler,
  increaseCountHandler,
  isLoading = false,
  isError = false,
  largeSize = false,
}: ItemCountControllersProps) => {
  const [blinkError, setBlinkError] = useState<boolean>(false);
  useEffect(() => {
    if (isError) {
      setBlinkError(true);
      setTimeout(setBlinkError, 1500, false);
    }
  }, [isError]);

  return (
    <StyledControllerWrapper $large={largeSize}>
      {decreaseCountHandler && !isLoading && !blinkError ? (
        <MinusButton
          aria-label={`Decrease to ${currentCount - 1} item in Cart`}
          onClick={decreaseCountHandler}
        />
      ) : (
        <MinusButton disabled />
      )}
      <StyledItemValue aria-hidden="true" $error={blinkError}>
        {isLoading ? <Preloader /> : currentCount}
      </StyledItemValue>
      {increaseCountHandler && !isLoading && !blinkError ? (
        <PlusButton
          aria-label={`Increase to ${currentCount + 1} item in Cart`}
          onClick={increaseCountHandler}
        />
      ) : (
        <PlusButton disabled />
      )}
    </StyledControllerWrapper>
  );
};
