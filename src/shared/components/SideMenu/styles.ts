import styled from "styled-components";
import { ScreenSizes } from "../../constants/themes";

interface ISideMenu{
  isVisible: boolean;
}

export const StyledSideMenuWrapper = styled.div<ISideMenu>`
  position: fixed;
  width: 300px;
  height: calc(100vh);
  border-right: 1px solid #ECF0F2;
  left: 0;
  top: 0;
  padding: 120px 20px 40px 20px;
  display: ${props => props.isVisible ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  background-color: white;
  
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    display: flex;
  }
`;






// import styled from "styled-components";
// import { ScreenSizes } from "../../helpers/themes";

// interface IBurgerMenu{
//   isOpen: boolean;
// }

// export const StyledSideMenuWrapper = styled.div<IBurgerMenu>`
//   padding: 10px 15px 15px 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;  
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   z-index: ${props => props.isOpen ? 10 : -1};
//   background-color: white;
//   opacity: ${props => props.isOpen ? 1 : 0};
//   transition: all 0.3s ease;

//   @media screen and (min-width: ${ScreenSizes.TABLET}px) {
//     background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,230,230,0.85) 35%);
//     opacity: 1;
//     z-index: 1;
//     height: 100vh;  
//     width: 250px;
//   };
  
//   @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
//     width: 350px;  
//   }
// `;

// export const StyledSideMenuHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const StyledBurgerCloseButton = styled.img`
//   display: block;
//   cursor: pointer;
//   @media screen and (min-width: ${ScreenSizes.TABLET}px) {
//     display: none;
//   };
// `;

// export const StyledBurgerOpenButton = styled.img<IBurgerMenu>`
//   display: ${props => props.isOpen ? "none" : "block"};
//   cursor: pointer;
//   position: fixed;
//   top: 15px;
//   left: 15px;
//   z-index: 10;
//   @media screen and (min-width: ${ScreenSizes.TABLET}px) {
//     display: none;
//   };
// `;