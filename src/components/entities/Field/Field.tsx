import { StyledField, StyledFieldLabel, StyledFieldValue } from "./Field.styles";
import { FieldProps } from "./Field.types";

export const Field = ({ label, value }: FieldProps) => (
  <StyledField>
    <StyledFieldLabel>{label}</StyledFieldLabel>
    {typeof value === "string" ? <StyledFieldValue>{value}</StyledFieldValue> : value}
  </StyledField>
);
