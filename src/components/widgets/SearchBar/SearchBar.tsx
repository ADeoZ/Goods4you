import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { useState } from "react";
import { StyledSearchBar, StyledSearchInput } from "./SearchBar.styles";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar = ({ searchHandler }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    searchHandler(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchHandler(searchText);
  };

  return (
    <section>
      <StyledSearchBar onSubmit={submitHandler}>
        <StyledSearchInput
          onInput={changeHandler}
          value={searchText}
          placeholder="Search by title"
          aria-label="Search in catalog by title"
        />
        <PrimaryButton>Search</PrimaryButton>
      </StyledSearchBar>
    </section>
  );
};
