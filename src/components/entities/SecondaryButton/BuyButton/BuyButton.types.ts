import { SecondaryButtonProps } from "../SecondaryButton.types";

export type BuyButtonProps = SecondaryButtonProps & { isLoading: boolean; isError: boolean };
