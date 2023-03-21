import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERS_PER_PAGE } from "../../shared/constants/paginations";
import { setUserInfo } from "../../modules/UserInfo/features/userInfoSlice";
import { UserCard } from "../../modules/Users/components/User/UserCard";
import { getUsers } from "../../modules/Users/features/actionCreators";
import { usersSelector } from "../../modules/Users/features/selector";
import { LoadCircle } from "../../shared/components/LoadCircle/LoadCircle";
import { ROUTES_PATHS } from "../../shared/constants/routes";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledUsersWrapper, StyledUsersList } from "./styles";
import { IUserInfo } from "../../modules/UserInfo/features/models";

export const Users = () => {
  const { users, isLoading, currentPage } = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (fetching && !isLoading) {
      dispatch(getUsers({ requiredAmount: USERS_PER_PAGE, page: currentPage }));
      setFetching(false);
    }
  }, [fetching, isLoading, dispatch, currentPage]);

  useEffect(() => {
    if (!users.length) {
      setFetching(true);
    }
  }, [users]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e: Event) => {
    const target = e.target as Document;
    if (
      target.documentElement.scrollHeight -
        target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setFetching(true);
    }
  };

  const onClickHandler = (user: IUserInfo) => {
    dispatch(setUserInfo(user));
    navigate(ROUTES_PATHS.USER_INFO);
  };

  return (
    <StyledUsersWrapper>
      <StyledUsersList>
        {users?.map((user) => (
          <UserCard
            key={user.login.username}
            fullName={`${user.name.last} ${user.name.first}`}
            phoneNumber={user.phone}
            address={user.location}
            avatar={user.picture.large}
            sex={user.gender}
            birthDate={user.dob.date}
            registrationDate={user.registered.date}
            onClickHandler={onClickHandler}
          />
        ))}
      </StyledUsersList>
      {isLoading && <LoadCircle />}
    </StyledUsersWrapper>
  );
};
