import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ErrorWithMessage } from "./getErrorMessage.types";

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError) => {
  if ("data" in error && (error as ErrorWithMessage).data.message)
    return (error as ErrorWithMessage).data.message;
  return "Sorry, this is an error";
};
