import styled from "styled-components";
import { ScreenSizes } from "../../../../shared/constants/themes";

interface IWrapperProps{
  sex: string;
};

export const StyledUserCardWrapper = styled.div<IWrapperProps>`
  @media screen and (min-width: ${ScreenSizes.MOBILE}px) { 
    width: 450px;
  }; 
  @media screen and (min-width: ${ScreenSizes.LAPTOP_L}px) { 
    width: 500px;
  };  

  background-color: ${props => props.sex === "male" ? "#3399ff" : "#ff99ff"};
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 3px #111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
  &:hover{
    transform: scale(1.05);
  };
`;

export const StyledUserMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUserPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 16px;
  margin-left: 5px;
  >p{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    width: 270px;
    >span{
      font-weight: 700;
    }
  }
  @media screen and (min-width: ${ScreenSizes.MOBILE}px) { 
    font-size: 20px;
  };   
`;

export const StyledUserImage = styled.img`
  border-radius: 10px;
`;