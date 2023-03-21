import { useTranslation } from "react-i18next";
import { StyledHomeContainer } from "./styles";
import worldMap from "../../assets/img/worldMap.png";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <StyledHomeContainer>
      <p>{t(`home.welcome`)}</p>
      <img
        src={worldMap}
        alt="AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US"
      />
      <p>{t(`home.about`)}</p>
      <p>{t(`home.howToUse`)}</p>
    </StyledHomeContainer>
  );
};
