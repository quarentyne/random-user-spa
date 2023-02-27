import { useTranslation } from "react-i18next";
import { renderDate } from "../../../shared/helpers/dateRender";
import {  StyledAvatarBlock, StyledInfoItem, StyledBlockLabel, StyledAdditionalInfoBlock, StyledGeneralInformationBlock,  StyledUserInfoContainer, StyledUserInfoWrapper } from "./styles";

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
    <StyledUserInfoContainer>
      <StyledUserInfoWrapper>
        <StyledAvatarBlock src={avatar} alt="user avatar"/>
        <StyledBlockLabel>{fullName}</StyledBlockLabel>
        <StyledGeneralInformationBlock>
          <StyledInfoItem>
            <span>{t(`userInfo.gender`)}:</span>
            <span>{sex}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            <span>{t(`userInfo.birthday`)}:</span>
            <span>{renderDate(new Date(Date.parse(birthDate)))}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            <span>{t(`userInfo.registration`)}:</span>
            <span>{renderDate(new Date(Date.parse(registrationDate)))}</span>
          </StyledInfoItem>
        </StyledGeneralInformationBlock>
        <StyledAdditionalInfoBlock>
          <StyledBlockLabel>{t(`userInfo.contacts`)}</StyledBlockLabel>
          <StyledInfoItem>
            <span>{t(`userInfo.phoneNumber`)}:</span>
            <span>{phoneNumber}</span>
          </StyledInfoItem>
          <StyledBlockLabel>{t(`userInfo.address`)}</StyledBlockLabel>
          <StyledInfoItem>
            <span>{t(`userInfo.country`)}:</span>
            <span>{address.country}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            <span>{t(`userInfo.state`)}:</span>
            <span>{address.state}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            <span>{t(`userInfo.city`)}:</span>
            <span>{address.city}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            <span>{t(`userInfo.street`)}:</span>
            <span>{`${address.street.name}, ${address.street.number}`}</span>
          </StyledInfoItem>
        </StyledAdditionalInfoBlock>
      </StyledUserInfoWrapper>
    </StyledUserInfoContainer>
  );
};