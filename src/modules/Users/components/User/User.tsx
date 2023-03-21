import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { IUserInfo } from "../../../UserInfo/features/models";
import {
  StyledUserCardWrapper,
  StyledUserImage,
  StyledUserMainWrapper,
  StyledUserPersonalInfo,
} from "./styles";

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
    state: string;
    city: string;
    country: string;
  };
  phoneNumber: string;
  registrationDate: string;
  onClickHandler: (user: IUserInfo) => void;
}

export const User = (user: IUser) => {
  const { fullName, avatar, birthDate, sex, onClickHandler } = user;
  const { t } = useTranslation();
  const clickHandler = useCallback(() => {
    onClickHandler({ ...user });
  }, [onClickHandler, user]);
  const formattedBirthDate = useMemo(
    () => dayjs(birthDate).format("DD.MM.YYYY"),
    [birthDate]
  );

  return (
    <StyledUserCardWrapper sex={sex} onClick={clickHandler}>
      <StyledUserMainWrapper>
        <StyledUserImage src={avatar} alt="avatar" />
        <StyledUserPersonalInfo>
          <p>
            <span>{t(`user.name`)}: </span>
            {fullName}
          </p>
          <p>
            <span>{t(`user.birthday`)}: </span>
            {formattedBirthDate}
          </p>
          <p>
            <span>{t(`user.sex`)}: </span>
            {sex}
          </p>
        </StyledUserPersonalInfo>
      </StyledUserMainWrapper>
    </StyledUserCardWrapper>
  );
};
