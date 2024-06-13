import { CatalogItem } from "@/models";

export type CatalogItemImageProps = {
  image: CatalogItem["thumbnail"];
  alt: string;
  link: string;
};
