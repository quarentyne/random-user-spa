import { useTranslation } from "react-i18next";
import { StyledErrorButton, StyledErrorSubtitle, StyledErrorTitle, StyledErrorWrapper } from "./styles";

export const Notfound = () => {
  const {t} = useTranslation();
  
  return(
    <StyledErrorWrapper>
      <StyledErrorTitle>404</StyledErrorTitle>
      <StyledErrorSubtitle>{t(`notfound.subtitle`)}</StyledErrorSubtitle>
      <StyledErrorButton to="home">{t(`notfound.button`)}</StyledErrorButton>
    </StyledErrorWrapper>
  );
};