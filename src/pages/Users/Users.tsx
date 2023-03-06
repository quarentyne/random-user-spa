import { useEffect } from "react";
import { User } from "../../modules/Users/components/User/User";
import { getUsers } from "../../modules/Users/features/actionCreators";
import { updatePageNumber } from "../../modules/Users/features/reducer";
import { usersSelector } from "../../modules/Users/features/selector";
import { Loader } from "../../shared/components/Loader/Loader";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledUsersWrapper, StyledUsersList } from "./styles";

export const Users = () => {
  const {users, isLoading, currentPage} = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if(!users.length && !isLoading) {
      dispatch(getUsers({amount: 20, page: currentPage}));
    }
  }, [dispatch, currentPage, users, isLoading])

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (() => {
      document.removeEventListener("scroll", onScroll);
    });
  });

  console.log(currentPage)

  const onScroll = () => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100 && !isLoading) {
      dispatch(updatePageNumber());
      dispatch(getUsers({amount: 10, page: currentPage}));
    };
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
        />)}
      </StyledUsersList>
      {isLoading && <Loader />}
    </StyledUsersWrapper>
  );
}