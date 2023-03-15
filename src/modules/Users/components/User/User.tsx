import { useTranslation } from "react-i18next";
import { renderDate } from "../../../../shared/helpers/dateRender";
import { IUserInfo } from "../../../UserInfo/features/models";
import { StyledUserCardWrapper, StyledUserMainWrapper, StyledUserPersonalInfo } from "./styles";

interface IUser {
  fullName: string;
  avatar: {
    large: string;
    medium: string;
    thumbnail: string;
  };
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
  onClickHandler: (user: IUserInfo) => void;
};

export const User = ({fullName, avatar, birthDate, sex, address, phoneNumber, registrationDate, onClickHandler}: IUser) => {
  const {t} = useTranslation();

  return(
    <StyledUserCardWrapper 
      sex={sex} 
      onClick={onClickHandler.bind(null, {fullName, avatar: avatar.large, sex, address, phoneNumber, registrationDate, birthDate } )}
    >
      <StyledUserMainWrapper>
        <picture>
          <source srcSet={avatar.large} media="(min-width: 450px)" />
          <source srcSet={avatar.medium} media="(max-width: 450px)" />
          <img src="avatar" alt="avatar" style={{borderRadius: "10px"}}/>
        </picture>
        <StyledUserPersonalInfo>
          <p><span>{t(`user.name`)}: </span>{fullName}</p>
          <p><span>{t(`user.birthday`)}: </span>{renderDate(new Date(Date.parse(birthDate)))}</p>
          <p><span>{t(`user.sex`)}: </span>{sex}</p>
        </StyledUserPersonalInfo>
      </StyledUserMainWrapper>
    </StyledUserCardWrapper>
  );
};