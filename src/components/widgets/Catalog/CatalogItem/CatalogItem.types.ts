export type CatalogItemProps = {
  id: string;
  title: string;
  price: number;
  image: CatalogItemImage;
};

export type CatalogItemImage = {
  src: string;
  srcSmall: string;
  alt: string;
};
