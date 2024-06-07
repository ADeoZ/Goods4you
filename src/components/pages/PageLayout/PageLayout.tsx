import { Footer } from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/Header";
import { MainWrapper } from "@/components/widgets/MainWrapper";
import { Outlet } from "react-router-dom";

export const PageLayout = () => (
  <>
    <Header />
    <MainWrapper>
      <Outlet />
    </MainWrapper>
    <Footer />
  </>
);
