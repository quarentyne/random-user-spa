import { useTranslation } from "react-i18next";
import { renderDate } from "../../../shared/helpers/dateRender";
import {  StyledAvatarBlock, StyledAdditionInfo, StyledBlockLabel, StyledAdditionalInfoBlock, StyledGeneralInformationBlock, StyledNameBlock, StyledUserInfoContainer, StyledUserInfoWrapper } from "./styles";

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
        <StyledNameBlock>{fullName}</StyledNameBlock>
        <StyledGeneralInformationBlock>
          <p>
            <span>{t(`userInfo.gender`)}:</span>
            <span>{sex}</span>
            </p>
          <p>
            <span>{t(`userInfo.birthday`)}:</span>
            <span>{renderDate(new Date(Date.parse(birthDate)))}</span>
            </p>
          <p>
            <span>{t(`userInfo.registration`)}:</span>
            <span>{renderDate(new Date(Date.parse(registrationDate)))}</span>
          </p>
        </StyledGeneralInformationBlock>
        <StyledAdditionalInfoBlock>
          <StyledBlockLabel>{t(`userInfo.contacts`)}</StyledBlockLabel>
          <StyledAdditionInfo>
            <span>{t(`userInfo.phoneNumber`)}:</span>
            <span>{phoneNumber}</span>
          </StyledAdditionInfo>
          <StyledBlockLabel>{t(`userInfo.address`)}</StyledBlockLabel>
          <StyledAdditionInfo>
            <span>{t(`userInfo.country`)}:</span>
            <span>{address.country}</span>
          </StyledAdditionInfo>
          <StyledAdditionInfo>
            <span>{t(`userInfo.state`)}:</span>
            <span>{address.state}</span>
          </StyledAdditionInfo>
          <StyledAdditionInfo>
            <span>{t(`userInfo.city`)}:</span>
            <span>{address.city}</span>
          </StyledAdditionInfo>
          <StyledAdditionInfo>
            <span>{t(`userInfo.street`)}:</span>
            <span>{`${address.street.name}, ${address.street.number}`}</span>
          </StyledAdditionInfo>
        </StyledAdditionalInfoBlock>
      </StyledUserInfoWrapper>
    </StyledUserInfoContainer>
  );
};