import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { loginStatusSelector } from "../modules/Login/features/selector";
import { routes, ROUTES_PATHS } from "../shared/constants/routes";
import { useAppSelector } from "../shared/hooks/useAppSelector";
import { Layout } from "../shared/Layout/Layout";

export const RouterConfig = () => {
  const { isAuthorized } = useAppSelector(loginStatusSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(ROUTES_PATHS.LOGIN, { replace: true });
    }
  }, [isAuthorized, navigate]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, component }, key) => (
          <Route path={path} element={component} key={key} />
        ))}
      </Route>
    </Routes>
  );
};
