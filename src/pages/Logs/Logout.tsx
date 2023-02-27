import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/LoginStatus/features/reducer";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { StyledLogButton, StyledLogoutBlock } from "./styles";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const logout = () => {
    dispatch(authorize());
    navigate("/login", {replace: true});
  };

  return(
    <StyledLogoutBlock>
      <StyledLogButton type="submit" onClick={logout}>{t(`sideMenu.logout`)}</StyledLogButton>
    </StyledLogoutBlock>
  );
};