import { ItemDescription } from "@/components/entities/ItemDescription";
import { BuyButton } from "@/components/entities/SecondaryButton";
import { ItemCountControllers } from "@components/entities/ItemCountControllers";
import { memo, useCallback } from "react";
import { StyledCatalogItem, StyledItemContent, StyledItemControllers } from "./CatalogItem.styles";
import { CatalogItemProps } from "./CatalogItem.types";
import { CatalogItemImage } from "./CatalogItemImage";

export const CatalogItem = memo(function CatalogItem(props: CatalogItemProps) {
  const { id, title, price, thumbnail, quantityInCart = 0 } = props;

  const buyHandler = useCallback(() => console.log("buyItem"), []);
  const decreaseCountHandler = useCallback(() => console.log("decreaseCount"), []);
  const increaseCountHandler = useCallback(() => console.log("increaseCount"), []);

  const link = `/product/${id}`;

  return (
    <StyledCatalogItem>
      <CatalogItemImage image={thumbnail} link={link} alt={title} />
      <StyledItemContent>
        <ItemDescription link={link} title={title} price={price} />
        <StyledItemControllers>
          {quantityInCart === 0 ? (
            <BuyButton aria-label="Add to Cart" onClick={buyHandler} />
          ) : (
            <ItemCountControllers
              currentCount={quantityInCart}
              decreaseCountHandler={decreaseCountHandler}
              increaseCountHandler={increaseCountHandler}
            />
          )}
        </StyledItemControllers>
      </StyledItemContent>
    </StyledCatalogItem>
  );
});
