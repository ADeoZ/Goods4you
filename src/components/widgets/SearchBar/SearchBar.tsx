import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { StyledSearchBar, StyledSearchInput } from "./SearchBar.styles";

export const SearchBar = () => (
  <StyledSearchBar>
    <StyledSearchInput placeholder="Search by title" aria-label="Search in catalog by title" />
    <PrimaryButton>Search</PrimaryButton>
  </StyledSearchBar>
);
