export type Product = {
  id: string;
  sku: string;
  title: string;
  price: number;
  rating: number;
  discount: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
  images: {
    mainImage: ProductMainImage;
    detailsImages: ProductDetailsImage[];
  };
};

export type ProductMainImage = {
  src: string;
  srcSmall: string;
  alt: string;
};

export type ProductDetailsImage = {
  id: string;
  previewSrc: string;
  fullSrc: string;
  fullSrcSmall: string;
  alt: string;
};
