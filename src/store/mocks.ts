import { CatalogItem, FaqItem, ListResponse, Product } from "@/models";

export const getCartItemsCount = () => 1;

const catalogItem: CatalogItem = {
  id: "Product",
  title: "Essence Mascara Lash Princess",
  price: 110,
  image: {
    src: "/images/sneak1.png",
    srcSmall: "/images/sneak1_small.png",
    alt: "Image of Essence Mascara Lash Princess, pink",
  },
};

export const getCatalogList = (page: number, limit: number): ListResponse<CatalogItem> => ({
  total: 25,
  page: 0,
  limit: 9,
  list: new Array(25)
    .fill(catalogItem)
    .map((item, index) => ({ ...item, id: `${item.id} ${index}` }))
    .slice(page * limit, page * limit + limit),
});

export const getFaqList = (): FaqItem[] => [
  {
    id: "asd901d10890asdj10du10dwjjasd",
    question: "Question 1",
    answer: "Long answer to the first question",
  },
  {
    id: "932jf02f0ka09d01jd0f0829uejfj",
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat cursus. Donec et lacus vel turpis vestibulum dictum in in libero. Quisque ut nulla suscipit, pharetra leo vel, elementum augue. Pellentesque quis placerat est. Nulla facilisi. Donec ultricies porttitor diam eget pretium. Donec fermentum vitae lectus at porta. Suspendisse ex arcu, tempor nec lacinia vitae, luctus vel augue. Curabitur eu varius justo, vitae volutpat ligula.",
  },
];

export const getProductDetails = (): Product => ({
  id: "Product 5",
  sku: "0005",
  title: "Puma Force 1 Shadow",
  price: 500,
  rating: 5,
  discount: 10,
  stock: 13,
  brand: "Puma",
  category: "Smartphones",
  description: "An apple mobile which is nothing like apple",
  images: {
    mainImage: {
      src: "/images/sneak1.png",
      srcSmall: "/images/sneak1_small.png",
      alt: "Image of Essence Mascara Lash Princess, pink",
    },
    detailsImages: new Array(6)
      .fill({
        id: "0",
        previewSrc: "/images/sneak2_preview.png",
        fullSrc: "/images/sneak2.png",
        fullSrcSmall: "/images/sneak2_small.png",
        alt: "Sneakers Puma Force 1 Shadow, white",
      })
      .map((item, index) => ({ ...item, id: `${index}` })),
  },
});
