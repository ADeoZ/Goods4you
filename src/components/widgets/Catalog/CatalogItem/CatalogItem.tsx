import { ItemDescription } from "@/components/entities/ItemDescription";
import { BuyButton } from "@/components/entities/SecondaryButton";
import { useAppDispatch } from "@/store";
import { addItem, decreaseQuantity, increaseQuantity } from "@/store/slices/cartSlice";
import { ItemCountControllers } from "@components/entities/ItemCountControllers";
import { memo } from "react";
import { StyledCatalogItem, StyledItemContent, StyledItemControllers } from "./CatalogItem.styles";
import { CatalogItemProps } from "./CatalogItem.types";
import { CatalogItemImage } from "./CatalogItemImage";

export const CatalogItem = memo(function CatalogItem(props: CatalogItemProps) {
  const { id, title, price, thumbnail, quantityInCart = 0 } = props;
  const dispatch = useAppDispatch();

  const buyHandler = () => dispatch(addItem(id));
  const decreaseCountHandler = () => dispatch(decreaseQuantity(id));
  const increaseCountHandler = () => dispatch(increaseQuantity(id));

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
