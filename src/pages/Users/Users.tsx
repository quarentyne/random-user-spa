import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_ELEMENTS } from "../../shared/constants/pagination";
import { setUserInfo } from "../../modules/UserInfo/features/reducer";
import { User } from "../../modules/Users/components/User/User";
import { getUsers } from "../../modules/Users/features/actionCreators";
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
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if(fetching && !isLoading){
      
      if(!users.length) {
        dispatch(getUsers({ requiredAmount: PAGE_ELEMENTS.PER_PAGE, page: currentPage }));
      };
      
      dispatch(getUsers({ requiredAmount: PAGE_ELEMENTS.PER_PAGE, page: currentPage }));      
      setFetching(false);
    };
  }, [fetching, isLoading, users, dispatch, currentPage]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return (() => {
      document.removeEventListener("scroll", scrollHandler);
    });
  });

  const scrollHandler = (e: Event) => {
    const target = e.target as Document;
    if(target.documentElement.scrollHeight - target.documentElement.scrollTop - window.innerHeight < 50){
      setFetching(true);
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