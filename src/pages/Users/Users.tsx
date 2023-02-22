import { useEffect, useState } from "react";
import { User } from "../../modules/Users/components/User/User";
import { getUsers } from "../../modules/Users/features/actionCreators";
import { usersSelector } from "../../modules/Users/features/selector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { StyledUsersWrapper, StylerUsersList } from "./styles";

export const Users = () => {
  const users = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers({amount: 20, page: 1}));
  }, [dispatch]);

  const a = () => {
    setPage(page + 1)
    dispatch(getUsers({amount: 10, page}))
  };

  return(
    <StyledUsersWrapper>
      <button onClick={a}>Add</button>
      <StylerUsersList>
        {users?.map(user=><User 
        key={user.id.value}
        fullName={`${user.name.last} ${user.name.first}`}
        phoneNumber={user.phone}
        address={user.location}
        avatar={user.picture.large}
        sex={user.gender}
        birthDate={user.dob.date}
        registrationDate={user.registered.date}
        />)}
      </StylerUsersList>
    </StyledUsersWrapper>
  );
}