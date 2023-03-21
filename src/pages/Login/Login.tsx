import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/Login/features/loginStatusSlice";
import { ROUTES_PATHS } from "../../shared/constants/routes";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { StyledLogButton, StyledLogBlock } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleAuthorize = () => {
    dispatch(authorize());
    localStorage.setItem("login", "true");
    navigate(ROUTES_PATHS.HOME, { replace: true });
  };

  return (
    <StyledLogBlock>
      <StyledLogButton type="submit" onClick={handleAuthorize}>
        {t(`sideMenu.login`)}
      </StyledLogButton>
    </StyledLogBlock>
  );
};
