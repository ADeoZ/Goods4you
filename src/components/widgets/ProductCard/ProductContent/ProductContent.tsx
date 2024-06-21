import { Field } from "@/components/entities/Field";
import { ItemCountControllers } from "@/components/entities/ItemCountControllers";
import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Rating } from "@/components/entities/Rating";
import { useCartItemCountControllers, useGetProductsInCart } from "@/hooks";
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
  const quantityInCart = productsInCart.get(id) ?? 0;

  const { buyHandler, decreaseHandler, increaseHandler, isLoading, isError } = useCartItemCountControllers(
    id,
    quantityInCart
  );

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
        <Field label="Stock" value={stock} />
        <Field label="Brand" value={brand} />
        <Field label="Category" value={category} />
        <Field label="Description" value={description} />
      </StyledProductContent>
      <StyledProductControllers>
        {quantityInCart === 0 ? (
          <PrimaryButton onClick={buyHandler} disabled={stock === 0}>
            Add to cart
          </PrimaryButton>
        ) : (
          <ItemCountControllers
            currentCount={quantityInCart}
            decreaseCountHandler={decreaseHandler}
            increaseCountHandler={quantityInCart < stock ? increaseHandler : null}
            isLoading={isLoading}
            isError={isError}
            largeSize
          />
        )}
      </StyledProductControllers>
    </StyledProductContentWrapper>
  );
};
