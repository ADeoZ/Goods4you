export type ItemCountControllersProps = {
  currentCount: number;
  decreaseCountHandler: (() => void) | null;
  increaseCountHandler: (() => void) | null;
  isLoading?: boolean;
  isError?: boolean;
  largeSize?: boolean;
};
