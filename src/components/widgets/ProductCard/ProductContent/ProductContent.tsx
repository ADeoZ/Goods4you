import { Field } from "@/components/entities/Field";
import { ItemCountControllers } from "@/components/entities/ItemCountControllers";
import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Rating } from "@/components/entities/Rating";
import { useGetProductsInCart } from "@/hooks";
import { useAppDispatch } from "@/store";
import { addItem, decreaseQuantity, increaseQuantity } from "@/store/slices/cartSlice";
import {
  StyledProductContent,
  StyledProductContentWrapper,
  StyledProductControllers,
  StyledProductTitle,
  StyledProductTitleWrapper,
} from "./ProductContent.styles";
import { ProductContentProps } from "./ProductContent.types";

export const ProductContent = ({
  id,
  title,
  sku,
  rating,
  price,
  discountPercentage,
  stock,
  brand,
  category,
  description,
}: ProductContentProps) => {
  const productsInCart = useGetProductsInCart();
  const countInCart = productsInCart.get(id) ?? 0;

  const dispatch = useAppDispatch();

  const buyHandler = () => dispatch(addItem(id));
  const decreaseCountHandler = () => dispatch(decreaseQuantity(id));
  const increaseCountHandler = () => dispatch(increaseQuantity(id));

  return (
    <StyledProductContentWrapper>
      <StyledProductTitleWrapper>
        <StyledProductTitle>{title}</StyledProductTitle>
        <Field label="SKU ID" value={sku} />
      </StyledProductTitleWrapper>
      <StyledProductContent>
        <Field label="Rating" value={<Rating value={rating} />} />
        <Field label="Base Price" value={`${price}$`} />
        <Field label="Discount percentage" value={`${discountPercentage}%`} />
        <Field label="Discount price" value={`${(price * (1 - discountPercentage / 100)).toFixed(2)}$`} />
        <Field label="Stock" value={`${stock}`} />
        <Field label="Brand" value={brand} />
        <Field label="Category" value={category} />
        <Field label="Description" value={description} />
      </StyledProductContent>
      <StyledProductControllers>
        {countInCart === 0 ? (
          <PrimaryButton onClick={buyHandler}>Add to cart</PrimaryButton>
        ) : (
          <ItemCountControllers
            currentCount={countInCart}
            decreaseCountHandler={decreaseCountHandler}
            increaseCountHandler={increaseCountHandler}
            largeSize
          />
        )}
      </StyledProductControllers>
    </StyledProductContentWrapper>
  );
};
