import { Footer } from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/Header";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Page404Wrapper } from "./Page404.styles";

export const Page404 = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <Page404Wrapper>
        {isRouteErrorResponse(error) && error.status === 404 ? 404 : "Something went wrong"}
      </Page404Wrapper>
      <Footer />
    </>
  );
};
