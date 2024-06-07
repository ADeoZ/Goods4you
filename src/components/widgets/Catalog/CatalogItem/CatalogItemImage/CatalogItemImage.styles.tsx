import { StyledItemTitle } from "@/components/widgets/ItemDescription/ItemDescription.styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledItemContent } from "../CatalogItem.styles";

export const StyledItemImageWrapper = styled(Link)`
  display: block;
  overflow: auto;
  position: relative;

  &::after {
    content: "";
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgb(135, 135, 135);
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 25%;
  }

  &:hover + ${StyledItemContent} ${StyledItemTitle} {
    text-decoration: underline;
  }
`;

export const StyledItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;
