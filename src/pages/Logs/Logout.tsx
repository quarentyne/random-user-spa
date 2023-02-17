import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/LoginStatus/features/reducer";
import { loginStatusSelector } from "../../modules/LoginStatus/features/selector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledFlexBlock, StyledLoginButton } from "./styles";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {isAuthorized} = useAppSelector(loginStatusSelector);
  const {t} = useTranslation();

  useEffect(() => {
    if(!isAuthorized){
      navigate("/login", {replace: true});
    }
  });

  const logout = () => {
    dispatch(authorize());
    navigate("/login", {replace: true});
  };

  return(
    <StyledFlexBlock>
      <StyledLoginButton type="submit" onClick={logout}>{t(`sideMenu.logout`)}</StyledLoginButton>
    </StyledFlexBlock>
  );
};