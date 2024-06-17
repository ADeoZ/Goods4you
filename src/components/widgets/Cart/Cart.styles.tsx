import { Field } from "@/components/entities/Field";
import { StyledFieldLabel, StyledFieldValue } from "@/components/entities/Field/Field.styles";
import styled from "styled-components";

export const StyledCart = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 56px 5px 247px 0;

  @media (max-width: 1000px) {
    justify-content: center;
    padding-bottom: 100px;
  }
`;

export const StyledCartList = styled.ul`
  width: 100%;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  border: 1px solid ${({ theme }) => theme.colors.borders.gray};
  border-radius: 4px;
  padding: 50px 47px 51px 46px;

  @media (max-width: 600px) {
    gap: unset;
  }
`;

export const StyledCartTotal = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StyledFieldCount = styled(Field)`
  margin-bottom: 42px;

  & ${StyledFieldLabel}, & ${StyledFieldValue} {
    font-size: 2rem;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    & ${StyledFieldLabel}, & ${StyledFieldValue} {
      font-size: 1.6rem;
    }
  }
`;

export const StyledFieldPrice = styled(Field)`
  margin-bottom: 4px;

  & ${StyledFieldLabel}, & ${StyledFieldValue} {
    font-size: 2rem;
  }

  & ${StyledFieldValue} {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    & ${StyledFieldLabel}, & ${StyledFieldValue} {
      font-size: 1.6rem;
    }
  }
`;

export const StyledFieldPriceWithDiscount = styled(Field)`
  & ${StyledFieldLabel}, & ${StyledFieldValue} {
    font-size: 2.4rem;
  }

  & ${StyledFieldValue} {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    & ${StyledFieldLabel}, & ${StyledFieldValue} {
      font-size: 1.8rem;
    }
  }
`;
