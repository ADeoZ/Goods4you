import { StyledLoadingStatus, StyledLoadingWrapper } from "./LoadingWrapper.styles";
import { LoadingWrapperProps } from "./LoadingWrapper.types";
import { getErrorMessage } from "./utils";

export const LoadingWrapper = ({ isLoading, error, isEmpty, children }: LoadingWrapperProps) => {
  if (error)
    return (
      <StyledLoadingWrapper>
        <div>{getErrorMessage(error)}</div>
      </StyledLoadingWrapper>
    );

  if (isLoading)
    return (
      <StyledLoadingWrapper>
        <StyledLoadingStatus>Waiting...</StyledLoadingStatus>
      </StyledLoadingWrapper>
    );

  if (isEmpty)
    return (
      <StyledLoadingWrapper>
        <div>No results here</div>
      </StyledLoadingWrapper>
    );

  return <>{children}</>;
};
