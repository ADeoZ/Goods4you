import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { StyledSearchBar, StyledSearchInput } from "./SearchBar.styles";
import { useState } from "react";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Search by "${searchText}"`);
  };

  return (
    <section>
      <StyledSearchBar onSubmit={submitHandler}>
        <StyledSearchInput
          onChange={changeHandler}
          value={searchText}
          placeholder="Search by title"
          aria-label="Search in catalog by title"
        />
        <PrimaryButton>Search</PrimaryButton>
      </StyledSearchBar>
    </section>
  );
};
