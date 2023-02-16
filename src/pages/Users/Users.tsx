import { useEffect, useState } from "react";
import { fetchUsers } from "../../modules/Users/features/actionCreators";
import { usersSelector } from "../../modules/Users/features/selector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";

export const Users = () => {
  const users = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(20));
  }, [dispatch]);

  const a = () => {
    setPage(page + 1)
    dispatch(fetchUsers(10, page))
  };
  // useEffect(() => {
  //   dispatch(fetchUsers(10, page));
  // }, [page]);

  console.log(page)  

  return(
    <div>
      <button onClick={a}>Add</button>
      <ul>
        {users?.map(user=><li key={user.phone}>{user.name.first}</li>)}
      </ul>
    </div>
  );
}