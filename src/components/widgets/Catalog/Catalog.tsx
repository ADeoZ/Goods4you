import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Title } from "@/components/entities/Title";
import { useDebounce, useGetProductsInCart, useScrollIntoView } from "@/hooks";
import { useGetProductsWithFilterQuery } from "@/store/api/productsApi";
import { useRef, useState } from "react";
import { LoadingWrapper } from "../LoadingWrapper";
import { SearchBar } from "../SearchBar";
import {
  StyledCatalog,
  StyledCatalogList,
  StyledCatalogShowMore,
  StyledSearchBarWrapper,
} from "./Catalog.styles";
import { CatalogItem } from "./CatalogItem";

const limit = import.meta.env.VITE_CATALOG_LIMIT;

export const Catalog = () => {
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);

  const {
    data: catalogData,
    isLoading,
    error,
  } = useGetProductsWithFilterQuery({ search: debouncedSearch, skip: page * limit, limit });
  const productsInCart = useGetProductsInCart();

  const catalogRef = useRef<HTMLElement>(null);
  useScrollIntoView(catalogRef);

  const searchSubmitHandler = (inputValue: string) => {
    setSearch(inputValue);
    setPage(0);
  };

  const showMoreHandler = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Title id="Catalog" ref={catalogRef}>
        Catalog
      </Title>
      <StyledSearchBarWrapper>
        <SearchBar searchHandler={searchSubmitHandler} />
      </StyledSearchBarWrapper>
      <LoadingWrapper isLoading={isLoading} error={error} isEmpty={catalogData?.total === 0}>
        <StyledCatalog>
          <StyledCatalogList>
            {catalogData?.products.map((item) => (
              <CatalogItem key={item.id} {...item} quantityInCart={productsInCart.get(item.id)} />
            ))}
          </StyledCatalogList>
          {catalogData && (page + 1) * limit <= catalogData.total && (
            <StyledCatalogShowMore>
              <PrimaryButton onClick={showMoreHandler}>Show more</PrimaryButton>
            </StyledCatalogShowMore>
          )}
        </StyledCatalog>
      </LoadingWrapper>
    </>
  );
};
