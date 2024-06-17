import { BottomWrapper } from "@/components/widgets/BottomWrapper";
import { Catalog } from "@/components/widgets/Catalog";
import { FAQ } from "@/components/widgets/FAQ";
import { Footer } from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/Header";
import { HeaderIntro } from "@/components/widgets/HeaderIntro";
import { MainWrapper } from "@/components/widgets/MainWrapper";
import { useNavigate } from "react-router-dom";

export const CatalogPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <HeaderIntro
          title="Any products from famous brands with worldwide delivery"
          description="We sell smartphones, laptops, clothes, shoes and many other products at low prices"
          buttonLabel="Go to shopping"
          buttonClickHandler={() => navigate("/#Catalog")}
        />
      </Header>
      <MainWrapper>
        <Catalog />
      </MainWrapper>
      <BottomWrapper>
        <FAQ />
      </BottomWrapper>
      <Footer />
    </>
  );
};
