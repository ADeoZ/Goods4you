import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StyledItemContentWrapper,
  StyledItemTitle,
} from "@/components/entities/ItemDescription/ItemDescription.styles";

export const StyledCartItem = styled.li`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  height: 57px;

  @media (max-width: 800px) {
    height: auto;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    &:not(:last-child) {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borders.gray};
    }
  }
`;

export const StyledCartItemLabel = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;

  @media (max-width: 800px) {
    height: auto;
    flex-wrap: wrap;
  }
`;

export const StyledCartItemImageWrapper = styled(Link)`
  width: 100%;
  max-width: 100px;
  height: 100%;

  &:hover + ${StyledItemContentWrapper} ${StyledItemTitle} {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const StyledCartItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCartControllers = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  width: 100%;
  max-width: 275px;

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledCartItemDelete = styled.button`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text.grayLight};

  &:hover {
    color: ${({ theme }) => theme.colors.text.dark};
    text-decoration: underline;
  }
`;
