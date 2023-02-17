import { useNavigate } from "react-router-dom";
import { authorize } from "../../modules/LoginStatus/features/reducer";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { StyledFlexBlock, StyledLoginButton } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login = () => {
    dispatch(authorize());
    navigate("/home");
  };

  return(
    <StyledFlexBlock>
      <StyledLoginButton type="submit" onClick={login}>Login</StyledLoginButton>
    </StyledFlexBlock>
  );
};