import { Field } from "@/components/entities/Field";
import { ItemCountControllers } from "@/components/entities/ItemCountControllers";
import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Rating } from "@/components/entities/Rating";
import { useCallback, useState } from "react";
import {
  StyledProductContent,
  StyledProductContentWrapper,
  StyledProductControllers,
  StyledProductTitle,
  StyledProductTitleWrapper,
} from "./ProductContent.styles";
import { ProductContentProps } from "./ProductContent.types";

export const ProductContent = ({
  title,
  sku,
  rating,
  price,
  discount,
  stock,
  brand,
  category,
  description,
}: ProductContentProps) => {
  const [countInCart, setCountInCart] = useState<number>(0);

  const decreaseCountHandler = useCallback(() => setCountInCart((prev) => prev - 1), []);
  const increaseCountHandler = useCallback(() => setCountInCart((prev) => prev + 1), []);

  return (
    <StyledProductContentWrapper>
      <StyledProductTitleWrapper>
        <StyledProductTitle>{title}</StyledProductTitle>
        <Field label="SKU ID" value={sku} />
      </StyledProductTitleWrapper>
      <StyledProductContent>
        <Field label="Rating" value={<Rating value={rating} />} />
        <Field label="Base Price" value={`${price}$`} />
        <Field label="Discount percentage" value={`${discount}%`} />
        <Field label="Discount price" value={`${price * (1 - discount / 100)}$`} />
        <Field label="Stock" value={`${stock}`} />
        <Field label="Brand" value={brand} />
        <Field label="Category" value={category} />
        <Field label="Description" value={description} />
      </StyledProductContent>
      <StyledProductControllers>
        {countInCart === 0 ? (
          <PrimaryButton onClick={() => setCountInCart(1)}>Add to cart</PrimaryButton>
        ) : (
          <ItemCountControllers
            currentCount={countInCart}
            decreaseCountHandler={decreaseCountHandler}
            increaseCountHandler={increaseCountHandler}
          />
        )}
      </StyledProductControllers>
    </StyledProductContentWrapper>
  );
};
