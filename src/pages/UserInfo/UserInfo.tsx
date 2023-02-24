import { useTranslation } from "react-i18next";
import { StyledInfoWrapper } from "./styles";
import warn from "../../assets/svg/warn.svg"

export const UserInfo = () => {
  const {t} = useTranslation();

  return(
    <StyledInfoWrapper>
      <img src={warn} alt="warning"/>
      <span>{t(`userInfo.selectUser`)}</span>
    </StyledInfoWrapper>
  );
};