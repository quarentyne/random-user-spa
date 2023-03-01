import styled from "styled-components";
import { ScreenSizes } from "../../../shared/helpers/themes";

export const StyledUserInfoContainer = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 15px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    padding: 30px 0;
  };
`;

export const StyledUserInfoWrapper = styled.div`
  width: 65%;
  text-align: center;
`;

export const StyledAvatarBlock = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 10px;

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    margin-bottom: 20px;
  };
`;

export const StyledGeneralInformationBlock = styled.div`  
  margin-bottom: 15px;
  >p{
    display: flex;    
    justify-content: space-between;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 18px;
  };

  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    margin-bottom: 25px;
    >p{
      font-size: 20px;
    }
  };
`;

export const StyledAdditionalInfoBlock = styled.div`
  color: rgba(0, 0, 0, 0.7);
`;

export const StyledInfoItem = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    font-size: 20px;
  };
`;

export const StyledBlockAddress = styled.div``;

export const StyledBlockLabel = styled.p`
  margin: 8px 0;
  font-size: 22px;
  color: rgba(0, 0, 0, 1);
  @media screen and (min-width: ${ScreenSizes.LAPTOP_S}px) {
    font-size: 24px;
  };
`;