import { Title } from "@/components/entities/Title";
import { StyledProductCard, StyledProductCardWrapper } from "./ProductCard.styles";
import { ProductCardProps } from "./ProductCard.types";
import { ProductCardImages } from "./ProductCardImages";
import { ProductContent } from "./ProductContent";
import { useGetProductByIdQuery } from "@/store/api/productsApi";
import { LoadingWrapper } from "../LoadingWrapper";

export const ProductCard = ({ id }: ProductCardProps) => {
  const { data: product, isLoading, error } = useGetProductByIdQuery(id ?? "");

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
