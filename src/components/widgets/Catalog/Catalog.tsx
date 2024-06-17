import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Title } from "@/components/entities/Title";
import { useScrollIntoView } from "@/components/hooks";
import { getCatalogList } from "@/store";
import { useRef, useState } from "react";
import { SearchBar } from "../SearchBar";
import { StyledCatalog, StyledCatalogList, StyledCatalogShowMore } from "./Catalog.styles";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {
  const [page, setPage] = useState<number>(0);

  const catalogRef = useRef<HTMLElement>(null);
  useScrollIntoView(catalogRef);

  const catalogList = getCatalogList(page, 9);

  const showMoreHandler = () => {
    setPage(0);
    console.log("more items!");
  };

  return (
    <>
      <Title id="Catalog" ref={catalogRef}>
        Catalog
      </Title>
      <SearchBar />
      <StyledCatalog>
        <StyledCatalogList>
          {catalogList.list.map((item) => (
            <CatalogItem key={item.id} {...item} />
          ))}
        </StyledCatalogList>
        <StyledCatalogShowMore>
          <PrimaryButton onClick={showMoreHandler}>Show more</PrimaryButton>
        </StyledCatalogShowMore>
      </StyledCatalog>
    </>
  );
};
