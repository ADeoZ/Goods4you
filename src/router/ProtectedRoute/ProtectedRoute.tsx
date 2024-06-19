import { FullScreenLoaderPage } from "@/components/pages/FullScreenLoaderPage";
import { useAppSelector } from "@/store";
import { useLazyGetCurrentUserQuery } from "@/store/api/authApi";
import { getUser } from "@/store/slices/userSlice";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuth, token } = useAppSelector(getUser);
  const location = useLocation();

  const [getAuthenticatedUser, { isLoading }] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    if (!isAuth && token) getAuthenticatedUser();
  }, [getAuthenticatedUser, isAuth, token]);

  if (isLoading) return <FullScreenLoaderPage />;

  if (!isAuth && !token) return <Navigate to="/login" state={{ redirectTo: location }} replace />;

  return <Outlet />;
};
