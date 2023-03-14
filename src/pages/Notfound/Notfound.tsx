import { useTranslation } from "react-i18next";
import { ROUTES_PATHS } from "../../shared/constants/routes";
import { StyledErrorButton, StyledErrorSubtitle, StyledErrorTitle, StyledErrorWrapper } from "./styles";

export const Notfound = () => {
  const {t} = useTranslation();
  
  return(
    <StyledErrorWrapper>
      <StyledErrorTitle>404</StyledErrorTitle>
      <StyledErrorSubtitle>{t(`notfound.subtitle`)}</StyledErrorSubtitle>
      <StyledErrorButton to={ROUTES_PATHS.HOME}>{t(`notfound.button`)}</StyledErrorButton>
    </StyledErrorWrapper>
  );
};