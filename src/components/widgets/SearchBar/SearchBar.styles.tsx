import { Input } from "@/components/entities/Input/Input";
import styled from "styled-components";

export const StyledSearchBar = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 43px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSearchInput = styled(Input).attrs({ type: "search" })`
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
