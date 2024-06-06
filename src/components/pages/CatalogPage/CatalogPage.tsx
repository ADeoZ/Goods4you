import { BottomWrapper } from "@/components/widgets/BottomWrapper";
import { Catalog } from "@/components/widgets/Catalog";
import { FAQ } from "@/components/widgets/FAQ";
import { Footer } from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/Header";
import { HeaderIntro } from "@/components/widgets/HeaderIntro";
import { MainWrapper } from "@/components/widgets/MainWrapper";

export const CatalogPage = () => (
  <>
    <Header>
      <HeaderIntro
        title="Any products from famous brands with worldwide delivery"
        description="We sell smartphones, laptops, clothes, shoes and many other products at low prices"
        buttonLabel="Go to shopping"
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
