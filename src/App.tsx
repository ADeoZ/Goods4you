import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CatalogPage } from "./components/pages/CatalogPage";
import { ThemeProvider } from "styled-components";
import { mainTheme, GlobalStyle } from "./styles";
import { Header } from "./components/widgets/Header";
import { Footer } from "./components/widgets/Footer";
import { MainWrapper } from "./components/widgets/MainWrapper";

// сделать докрутку до якорей
// обернуть img в picture
// добавить gh-pages

const PageLayout = () => (
  <>
    <Header />
    <MainWrapper>
      <Outlet />
    </MainWrapper>
    <Footer />
  </>
);

const router = createBrowserRouter([
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
        element: <div>Страница товара</div>,
      },
      {
        path: "cart",
        element: <div>Корзина</div>,
      },
    ],
  },
]);

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
