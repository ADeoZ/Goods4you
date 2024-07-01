import { useEffect, useState } from "react";
import { Preloader } from "../../Preloader";
import { StyledBuyButton } from "./BuyButton.styles";
import { BuyButtonProps } from "./BuyButton.types";

export const BuyButton = (props: BuyButtonProps) => {
  const { isError, isLoading, ...restProps } = props;

  const [blinkError, setBlinkError] = useState<boolean>(false);
  useEffect(() => {
    if (isError) {
      setBlinkError(true);
      setTimeout(setBlinkError, 1500, false);
    }
  }, [isError]);

  return (
    <StyledBuyButton
      {...restProps}
      $loading={isLoading}
      $error={blinkError}
      disabled={isLoading || blinkError}
    >
      {isLoading && <Preloader />}
    </StyledBuyButton>
  );
};
