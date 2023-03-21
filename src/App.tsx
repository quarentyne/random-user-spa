import { checkAuthorizationStatus } from "./modules/Login/features/loginStatusSlice";
import { RouterConfig } from "./router/Config";
import { useAppDispatch } from "./shared/hooks/useAppDispatch";
import { GlobalStyle } from "./styles";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(checkAuthorizationStatus(localStorage.getItem("login") || ""));

  return (
    <>
      <GlobalStyle />
      <RouterConfig />
    </>
  );
};

export default App;
