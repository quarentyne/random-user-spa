// import { useEffect } from "react";
import { authorize } from "../../modules/LoginStatus/features/reducer";
// import { fetchUsers } from "../../modules/Users/features/actionCreators";
// import { usersSelector } from "../../modules/Users/features/selector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
// import { useAppSelector } from "../../shared/hooks/useAppSelector";

export const Login = () => {
  // useEffect(() => {
  //   dispatch(fetchUsers(20));
  // }, [])
  // const users = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(authorize());
  }

  // if(!users){
  //   return <div>Null</div>;
  // }

  return(
    <>
      {/* <ul>
        {users.map(user => <li>{user.name.first}</li>)}
      </ul> */}
      <button onClick={login}>Login</button>
    </>
  );
};