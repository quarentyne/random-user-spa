import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/Login/features/reducer";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { StyledLogButton, StyledLogoutBlock } from "./styles";

export const Logout = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.setItem("login", "");;
    dispatch(authorize());
    navigate("/login", {replace: true});
  };

  return(
    <StyledLogoutBlock>
      <StyledLogButton type="submit" onClick={logout}>{t(`sideMenu.logout`)}</StyledLogButton>
    </StyledLogoutBlock>
  );
};