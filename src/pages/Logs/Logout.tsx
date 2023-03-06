import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { StyledLogButton, StyledLogoutBlock } from "./styles";

export const Logout = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const logout = () => {
    sessionStorage.setItem('login', 'false');
    navigate("/login", {replace: true});
  };

  return(
    <StyledLogoutBlock>
      <StyledLogButton type="submit" onClick={logout}>{t(`sideMenu.logout`)}</StyledLogButton>
    </StyledLogoutBlock>
  );
};