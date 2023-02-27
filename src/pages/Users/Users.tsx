import { useEffect, useState } from "react";
import { User } from "../../modules/Users/components/User/User";
import { getUsers } from "../../modules/Users/features/actionCreators";
import { usersSelector } from "../../modules/Users/features/selector";
import { Loader } from "../../shared/components/Loader/Loader";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledUsersWrapper, StylerUsersList } from "./styles";

export const Users = () => {
  const {users, isLoading} = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if(!users.length){
      dispatch(getUsers({amount: 20, page: currentPage}));
    };

    if(isFetching){
      dispatch(getUsers({amount: 10, page: currentPage}));
      setIsFetching(false);
    };       
  }, [dispatch, currentPage, isFetching, users]);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (() => {
      document.removeEventListener("scroll", onScroll);
    });
  });

  const onScroll = () => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100 && !isLoading){
      setCurrentPage(currentPage + 1);
      setIsFetching(true);
    };
  };

  return(
    <StyledUsersWrapper>
      <StylerUsersList>
        {users?.map(user=><User 
        key={user.login.username}
        fullName={`${user.name.last} ${user.name.first}`}
        phoneNumber={user.phone}
        address={user.location}
        avatar={user.picture.large}
        sex={user.gender}
        birthDate={user.dob.date}
        registrationDate={user.registered.date}
        />)}
      </StylerUsersList>
      {isLoading && <Loader />}
    </StyledUsersWrapper>
  );
}