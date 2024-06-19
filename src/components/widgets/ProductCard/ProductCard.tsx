import { Title } from "@/components/entities/Title";
import { useGetProductByIdQuery } from "@/store/api/productsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { LoadingWrapper } from "../LoadingWrapper";
import { StyledProductCard, StyledProductCardWrapper } from "./ProductCard.styles";
import { ProductCardProps } from "./ProductCard.types";
import { ProductCardImages } from "./ProductCardImages";
import { ProductContent } from "./ProductContent";

export const ProductCard = ({ id }: ProductCardProps) => {
  const { data: product, isLoading, error } = useGetProductByIdQuery(id ?? skipToken);

  return (
    <LoadingWrapper isLoading={isLoading} error={error} isEmpty={!product}>
      {product && (
        <StyledProductCard>
          <Title as="p">{`Product ${product.id}`}</Title>
          <StyledProductCardWrapper>
            <ProductCardImages images={product.images} title={product.title} />
            <ProductContent {...product} />
          </StyledProductCardWrapper>
        </StyledProductCard>
      )}
    </LoadingWrapper>
  );
};
