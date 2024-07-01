import { ItemDescription } from "@/components/entities/ItemDescription";
import { BuyButton } from "@/components/entities/SecondaryButton";
import { useCartItemCountControllers } from "@/hooks";
import { ItemCountControllers } from "@components/entities/ItemCountControllers";
import { memo } from "react";
import { StyledCatalogItem, StyledItemContent, StyledItemControllers } from "./CatalogItem.styles";
import { CatalogItemProps } from "./CatalogItem.types";
import { CatalogItemImage } from "./CatalogItemImage";

export const CatalogItem = memo(function CatalogItem(props: CatalogItemProps) {
  const { id, title, price, thumbnail, stock, quantityInCart = 0 } = props;

  const { buyHandler, decreaseHandler, increaseHandler, isLoading, isError } = useCartItemCountControllers(
    id,
    quantityInCart
  );

  const link = `/product/${id}`;

  return (
    <StyledCatalogItem>
      <CatalogItemImage image={thumbnail} link={link} alt={title} />
      <StyledItemContent>
        <ItemDescription link={link} title={title} price={price} />
        <StyledItemControllers>
          {quantityInCart === 0 ? (
            <BuyButton
              aria-label="Add to Cart"
              onClick={buyHandler}
              disabled={stock === 0}
              isLoading={isLoading}
              isError={isError}
            />
          ) : (
            <ItemCountControllers
              currentCount={quantityInCart}
              decreaseCountHandler={decreaseHandler}
              increaseCountHandler={quantityInCart < stock ? increaseHandler : null}
              isLoading={isLoading}
              isError={isError}
            />
          )}
        </StyledItemControllers>
      </StyledItemContent>
    </StyledCatalogItem>
  );
});
