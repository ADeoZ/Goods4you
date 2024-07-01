import { Header } from "@/components/widgets/Header";
import { LoadingWrapper } from "@/components/widgets/LoadingWrapper";
import { MainWrapper } from "@/components/widgets/MainWrapper";

export const FullScreenLoaderPage = () => (
  <>
    <Header showMenu={false} />
    <MainWrapper>
      <LoadingWrapper isLoading={true} />
    </MainWrapper>
  </>
);
