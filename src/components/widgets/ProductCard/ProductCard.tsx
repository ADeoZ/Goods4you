import { Title } from "@/components/entities/Title";
import { StyledProductCard, StyledProductCardWrapper } from "./ProductCard.styles";
import { ProductCardImages } from "./ProductCardImages";
import { ProductContent } from "./ProductContent";
import { getProductDetails } from "@/store";

export const ProductCard = () => {
  const product = getProductDetails();

  return (
    <StyledProductCard>
      <Title as="p">{product.id}</Title>
      <StyledProductCardWrapper>
        <ProductCardImages images={product.images.detailsImages} />
        <ProductContent {...product} />
      </StyledProductCardWrapper>
    </StyledProductCard>
  );
};
