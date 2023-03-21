import { useTranslation } from "react-i18next";
import { StyledInfoWrapper } from "./styles";
import warn from "../../assets/svg/warn.svg";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { userInfoSelector } from "../../modules/UserInfo/features/selector";
import { UserInfo } from "../../modules/UserInfo/components/UserInfo";

export const UserInformation = () => {
  const { t } = useTranslation();
  const { user } = useAppSelector(userInfoSelector);

  if (!user) {
    return (
      <StyledInfoWrapper>
        <img src={warn} alt="warning" />
        <span>{t(`userInfo.selectUser`)}</span>
      </StyledInfoWrapper>
    );
  }

  return (
    <StyledInfoWrapper>
      <UserInfo
        fullName={user.fullName}
        birthDate={user.birthDate}
        phoneNumber={user.phoneNumber}
        registrationDate={user.registrationDate}
        address={user.address}
        avatar={user.avatar}
        sex={user.sex}
      />
    </StyledInfoWrapper>
  );
};
