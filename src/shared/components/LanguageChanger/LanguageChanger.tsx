import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { Languages } from "../../helpers/themes";
import { StyledLanguageChangerSelect, StyledLanguageChangerWrapper } from "./styles";

export const LanguageChanger = () => {
  const [actualLanguage, setActualLanguage] = useState(localStorage.getItem('i18nextLng') || Languages.UA);
  const { t } = useTranslation();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    setActualLanguage(e.target.value);
  };
  
  return(
    <StyledLanguageChangerWrapper>
      <StyledLanguageChangerSelect defaultValue={actualLanguage} onChange={changeLanguage}>
        <option value={Languages.UA}>{t(`sideMenu.ukrainian`)}</option>
        <option value={Languages.EN}>{t(`sideMenu.english`)}</option>
      </StyledLanguageChangerSelect>
    </StyledLanguageChangerWrapper>
  );
};