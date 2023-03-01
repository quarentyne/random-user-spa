import { useTranslation } from "react-i18next";
import { StyledHomeContainer } from "./styles";

export const Home = () => {
  const {t} = useTranslation();
  return(
    <StyledHomeContainer>
      <p>{t(`home.welcome`)}</p>
      <p>{t(`home.howToUse`)}</p>
    </StyledHomeContainer>
  );
};