import { ProductCard } from "@/components/widgets/ProductCard";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { productId } = useParams();

  return <ProductCard id={productId} />;
};
