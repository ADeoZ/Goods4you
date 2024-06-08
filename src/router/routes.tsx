import { CartPage } from "@/components/pages/CartPage";
import { CatalogPage } from "@/components/pages/CatalogPage";
import { Page404 } from "@/components/pages/Page404";
import { PageLayout } from "@/components/pages/PageLayout";
import { ProductPage } from "@/components/pages/ProductPage";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <CatalogPage />,
    errorElement: <Page404 />,
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
        element: <CartPage />,
      },
    ],
  },
];
