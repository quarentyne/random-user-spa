import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { StyledInfoWrapper } from "./styles";
import warn from "../../assets/svg/warn.svg";
import { removeUserInfo } from "../../modules/UserInfo/features/reducer";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { userInfoSelector } from "../../modules/UserInfo/features/selector";


export const UserInfo = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userInfoSelector); 

  useEffect(() => {
    return () => {
      dispatch(removeUserInfo());
    }
  }, [dispatch]);

  if(!user){
    return(
      <StyledInfoWrapper>
        <img src={warn} alt="warning"/>
        <span>{t(`userInfo.selectUser`)}</span>
      </StyledInfoWrapper>
    );
  };
  
  return(
    <StyledInfoWrapper>
      {user.fullName}
    </StyledInfoWrapper>
  );
};