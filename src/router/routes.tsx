import { CartPage } from "@/components/pages/CartPage";
import { CatalogPage } from "@/components/pages/CatalogPage";
import { LoginPage } from "@/components/pages/LoginPage";
import { Page404 } from "@/components/pages/Page404";
import { PageLayout } from "@/components/pages/PageLayout";
import { ProductPage } from "@/components/pages/ProductPage";
import { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <CatalogPage />,
      },
      {
        element: <PageLayout />,
        children: [
          {
            path: "product/:productId",
            element: <ProductPage />,
          },
          {
            path: "cart",
            element: <CartPage />,
          },
        ],
      },
    ],
  },
];
