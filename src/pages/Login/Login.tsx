import { authorize } from "../../modules/LoginStatus/features/reducer";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";

export const Login = () => {
  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(authorize());
  }

  return(
    <button onClick={login}>Login</button>
  );
};