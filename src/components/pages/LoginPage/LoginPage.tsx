import { Title } from "@/components/entities/Title";
import { Header } from "@/components/widgets/Header";
import { LoginForm } from "@/components/widgets/LoginForm";
import { MainWrapper } from "@/components/widgets/MainWrapper";
import { LocationStateWithRedirect } from "@/router";
import { useAppSelector } from "@/store";
import { getUser } from "@/store/slices/userSlice";
import { Location, Navigate, useLocation } from "react-router-dom";
import { StyledLoginPageWrapper } from "./LoginPage.styles";

export const LoginPage = () => {
  const { token } = useAppSelector(getUser);
  const location: Location<LocationStateWithRedirect> = useLocation();
  const from = location.state?.from.pathname || "/";
  if (token) return <Navigate to={from} replace />;

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
