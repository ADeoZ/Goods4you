import { Title } from "@/components/entities/Title";
import { Header } from "@/components/widgets/Header";
import { LoginForm } from "@/components/widgets/LoginForm";
import { MainWrapper } from "@/components/widgets/MainWrapper";
import { StyledLoginPageWrapper } from "./LoginPage.styles";
import { useAppSelector } from "@/store";
import { getUser } from "@/store/slices/userSlice";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const { token } = useAppSelector(getUser);
  if (token) return <Navigate to="/" replace />;

  return (
    <>
      <Header showMenu={false} />
      <MainWrapper>
        <StyledLoginPageWrapper>
          <Title>Login</Title>
          <LoginForm />
        </StyledLoginPageWrapper>
      </MainWrapper>
    </>
  );
};
