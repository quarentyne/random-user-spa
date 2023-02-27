import styled from "styled-components";

export const StyledUserInfoContainer = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 15px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUserInfoWrapper = styled.div`
  width: 65%;
  text-align: center;
`;

export const StyledAvatarBlock = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const StyledGeneralInformationBlock = styled.div`  
  margin-bottom: 25px;
  >p{
    display: flex;    
    justify-content: space-between;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.7);
  };
`;

export const StyledAdditionalInfoBlock = styled.div`
  color: rgba(0, 0, 0, 0.7);
`;

export const StyledInfoItem = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const StyledBlockAddress = styled.div``;

export const StyledBlockLabel = styled.p`
  margin: 8px 0;
  font-size: 24px;
  color: rgba(0, 0, 0, 1);
`;