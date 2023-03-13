import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PAGINATION_CONSTANTS } from "../../assets/constants/pagination";
import { setUserInfo } from "../../modules/UserInfo/features/reducer";
import { User } from "../../modules/Users/components/User/User";
import { getUsers } from "../../modules/Users/features/actionCreators";
import { updatePageNumber } from "../../modules/Users/features/reducer";
import { usersSelector } from "../../modules/Users/features/selector";
import { LoadCircle } from "../../shared/components/LoadCircle/LoadCircle";
import { ROUTES_PATHS } from "../../shared/constants/routes";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledUsersWrapper, StyledUsersList } from "./styles";

interface IUserInfo {
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

export const Users = () => {
  const {users, isLoading, currentPage} = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!users.length && !isLoading) {
      dispatch(getUsers({requiredAmount: PAGINATION_CONSTANTS.PRELOAD, page: currentPage}));
    }
  }, [dispatch, currentPage, users, isLoading])

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (() => {
      document.removeEventListener("scroll", onScroll);
    });
  });

  const onScroll = () => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100 && !isLoading) {
      dispatch(updatePageNumber());
      dispatch(getUsers({requiredAmount: PAGINATION_CONSTANTS.UPLOAD, page: currentPage}));
    };
  };

  const onClickHandler = (user: IUserInfo) => {
    dispatch(setUserInfo(user));
    navigate(ROUTES_PATHS.USER_INFO);
  };

  return(
    <StyledUsersWrapper>
      <StyledUsersList>
        {users?.map(user=><User 
        key={user.login.username}
        fullName={`${user.name.last} ${user.name.first}`}
        phoneNumber={user.phone}
        address={user.location}
        avatar={user.picture}
        sex={user.gender}
        birthDate={user.dob.date}
        registrationDate={user.registered.date}
        onClickHandler={onClickHandler}
        />)}
      </StyledUsersList>
      {isLoading && <LoadCircle />}
    </StyledUsersWrapper>
  );
}