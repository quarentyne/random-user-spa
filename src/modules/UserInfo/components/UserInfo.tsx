import { useTranslation } from "react-i18next";
import { renderDate } from "../../../shared/helpers/dateRender";
import { StyledDivider, StyledInfoText, StyledInfoTitle, StyledUserImage, StyledUserInfoCard, StyledUserInfoMain, StyledUserName, StyledUserWrapper } from "./styles";

interface IUser {
  fullName: string;
  avatar: string;
  birthDate: string;
  sex: string;
  address: {
    street: {
      number: number;
      name: string;
    };
    state: string,
    city: string;
    country: string;
  };
  phoneNumber: string;
  registrationDate: string;
};

export const UserInfo = ({fullName, avatar, birthDate, sex, address, phoneNumber, registrationDate}: IUser) => {
  const {t} = useTranslation();
  
  return(
    <StyledUserWrapper>
      <StyledUserInfoCard>
        <StyledUserInfoMain>
          <StyledUserImage src={avatar} alt="User photo"/>
          <StyledUserName>
            {fullName}
          </StyledUserName>
        </StyledUserInfoMain>
      </StyledUserInfoCard>
      <StyledDivider />
      <StyledUserInfoCard>
        <StyledInfoTitle>
          {t(`userInfo.gender`)}
        </StyledInfoTitle>
        <StyledInfoText>
          {sex}
        </StyledInfoText>
        <StyledInfoTitle>
          {t(`userInfo.birthday`)}
        </StyledInfoTitle>
        <StyledInfoText>
          {renderDate(new Date(Date.parse(birthDate)))}
        </StyledInfoText>
        <StyledInfoTitle>
          {t(`userInfo.registration`)}
        </StyledInfoTitle>
        <StyledInfoText>
          {renderDate(new Date(Date.parse(registrationDate)))}
        </StyledInfoText>
        <StyledInfoTitle>
          {t(`userInfo.phoneNumber`)}
        </StyledInfoTitle>
        <StyledInfoText>
          {phoneNumber}
        </StyledInfoText>
        <StyledInfoTitle>
          {t(`userInfo.address`)}
        </StyledInfoTitle>
        <StyledInfoText>
          {`${address.street.number} ${address.street.name}, ${address.city}, ${address.state}, ${address.country}`}
        </StyledInfoText>
      </StyledUserInfoCard>
    </StyledUserWrapper>
  );
};