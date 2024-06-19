import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type LoadingWrapperProps = {
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
  isEmpty?: boolean;
  children?: React.ReactNode;
};
