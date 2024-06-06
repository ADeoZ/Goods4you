import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { getCatalogList } from "@/store";
import { useState } from "react";
import { StyledCatalog, StyledCatalogList, StyledCatalogShowMore } from "./Catalog.styles";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {
  const [page, setPage] = useState<number>(0);

  const catalogList = getCatalogList(page, 9);

  const showMoreHandler = () => {
    setPage(0);
    console.log("more items!");
  };

  return (
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
  );
};
