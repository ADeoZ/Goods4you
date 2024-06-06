export const getCartItemsCount = () => 1;

const catalogItem = {
  id: "Product",
  sku: "0005",
  title: "Essence Mascara Lash Princess",
  price: 110,
  rating: 5,
  discount: 10,
  stock: 13,
  brand: "Puma",
  category: "Smartphones",
  description: "An apple mobile which is nothing like apple",
  image: {
    src: "./images/sneak1.png",
    srcSmall: "./images/sneak1_small.png",
    alt: "Image of Essence Mascara Lash Princess, pink",
  },
};

export const getCatalogList = (page: number, limit: number) => ({
  total: 25,
  page: 0,
  limit: 9,
  list: Array(25)
    .fill(catalogItem)
    .map((item, index) => ({ ...item, id: `${item.id} ${index}` }))
    .slice(page * limit, page * limit + limit) as (typeof catalogItem)[],
});

export const getFaqList = () => [
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
