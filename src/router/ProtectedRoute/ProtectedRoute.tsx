import { FullScreenLoaderPage } from "@/components/pages/FullScreenLoaderPage";
import { useAppSelector } from "@/store";
import { useLazyGetCurrentUserQuery } from "@/store/api/authApi";
import { getUser } from "@/store/slices/userSlice";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuth, token } = useAppSelector(getUser);
  const location = useLocation();
  const navigate = useNavigate();

  const [getAuthenticatedUser, { isLoading }] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    if (!isAuth && token) getAuthenticatedUser();
    if (!isAuth && !token) navigate("/login", { replace: true, state: { from: location } });
  }, [getAuthenticatedUser, location, navigate, isAuth, token]);

  return isLoading ? <FullScreenLoaderPage /> : <Outlet />;
};
