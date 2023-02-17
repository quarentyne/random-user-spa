import { Outlet } from "react-router-dom";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { StyledLayoutContainer } from "./styles";

export const Layout = () => {
  return(
    <>
      <SideMenu />
      <StyledLayoutContainer>
        <Outlet />
      </StyledLayoutContainer>
    </>
  );
};