import { Title } from "@/components/entities/Title";
import { Header } from "@components/widgets/Header";
import { HeaderIntro } from "@components/widgets/HeaderIntro";
import { SearchBar } from "@components/widgets/SearchBar";
import { BottomWrapper } from "./components/widgets/BottomWrapper";
import { Catalog } from "./components/widgets/Catalog";
import { FAQ } from "./components/widgets/FAQ";
import { Footer } from "./components/widgets/Footer";
import { MainWrapper } from "./components/widgets/MainWrapper";

// сделать ссылки
// обернуть img в picture
// добавить gh-pages

export const App = () => {
  return (
    <>
      <Header>
        <HeaderIntro
          title="Any products from famous brands with worldwide delivery"
          description="We sell smartphones, laptops, clothes, shoes and many other products at low prices"
          buttonLabel="Go to shopping"
        />
      </Header>
      <MainWrapper>
        <Title id="Catalog">Catalog</Title>
        <SearchBar />
        <Catalog />
      </MainWrapper>
      <BottomWrapper>
        <FAQ />
      </BottomWrapper>
      <Footer />
    </>
  );
};
