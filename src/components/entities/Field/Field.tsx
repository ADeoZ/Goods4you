import { StyledField, StyledFieldLabel, StyledFieldValue } from "./Field.styles";
import { FieldProps } from "./Field.types";

export const Field = ({ label, value, className }: FieldProps) => (
  <StyledField className={className}>
    <StyledFieldLabel>{label}</StyledFieldLabel>
    {typeof value === "string" || typeof value === "number" ? (
      <StyledFieldValue>{value}</StyledFieldValue>
    ) : (
      value
    )}
  </StyledField>
);
