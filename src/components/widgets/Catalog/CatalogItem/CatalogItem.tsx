import { BuyButton } from "@/components/entities/SecondaryButton";
import { ItemDescription } from "@/components/widgets/ItemDescription";
import { StyledCatalogItem, StyledItemContent, StyledItemControllers } from "./CatalogItem.styles";
import { CatalogItemProps } from "./CatalogItem.types";
import { CatalogItemImage } from "./CatalogItemImage";
import { useCallback, useState } from "react";
import { ItemCountControllers } from "../../../entities/ItemCountControllers";

export const CatalogItem = (props: CatalogItemProps) => {
  const { id, title, price, image } = props;

  const [countInCart, setCountInCart] = useState<number>(0);

  const decreaseCountHandler = useCallback(() => setCountInCart((prev) => prev - 1), []);
  const increaseCountHandler = useCallback(() => setCountInCart((prev) => prev + 1), []);

  const link = `sneakers/${id}`;

  return (
    <StyledCatalogItem>
      <CatalogItemImage link={link} image={image} />
      <StyledItemContent>
        <ItemDescription link={link} title={title} price={price} />
        <StyledItemControllers>
          {countInCart === 0 ? (
            <BuyButton aria-label="Add to Cart" onClick={() => setCountInCart(1)} />
          ) : (
            <ItemCountControllers
              currentCount={countInCart}
              decreaseCountHandler={decreaseCountHandler}
              increaseCountHandler={increaseCountHandler}
            />
          )}
        </StyledItemControllers>
      </StyledItemContent>
    </StyledCatalogItem>
  );
};
