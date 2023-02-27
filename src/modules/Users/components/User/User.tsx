import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { renderDate } from "../../../../shared/helpers/dateRender";
import { useAppDispatch } from "../../../../shared/hooks/useAppDispatch";
import { setUserInfo } from "../../../UserInfo/features/reducer";
import { StyledUserCardWrapper, StyledUserMainWrapper, StyledUserPersonalInfo } from "./styles";

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

export const User = ({fullName, avatar, birthDate, sex, address, phoneNumber, registrationDate}: IUser) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setUserInfo({fullName, avatar, birthDate, sex, address, phoneNumber, registrationDate}));
    navigate("/user-info");
  };

  return(
    <StyledUserCardWrapper sex={sex} onClick={onClickHandler}>
      <StyledUserMainWrapper>
        <img style={{borderRadius: "10px"}} src={avatar} alt="avatar"/>
        <StyledUserPersonalInfo>
          <p><span>{t(`user.name`)}: </span>{fullName}</p>
          <p><span>{t(`user.birthday`)}: </span>{renderDate(new Date(Date.parse(birthDate)))}</p>
          <p><span>{t(`user.sex`)}: </span>{sex}</p>
        </StyledUserPersonalInfo>
      </StyledUserMainWrapper>
    </StyledUserCardWrapper>
  );
};