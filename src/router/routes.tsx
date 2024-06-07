import { CatalogPage } from "@/components/pages/CatalogPage";
import { PageLayout } from "@/components/pages/PageLayout";
import { ProductPage } from "@/components/pages/ProductPage";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <CatalogPage />,
    errorElement: <div>Ошибка!</div>,
  },
  {
    element: <PageLayout />,
    children: [
      {
        path: "sneakers/:sneakersId",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <div>Корзина</div>,
      },
    ],
  },
];
