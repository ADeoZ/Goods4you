export type Product = {
  id: number;
  sku: string;
  title: string;
  price: number;
  rating: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
  images: ProductImage[];
  thumbnail: string;
};

export type ProductImage = string;
