import styled from "styled-components";

export const StyledUserWrapper = styled.div`
  width: 520px;
  border: 1px solid #D8DBDD;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const StyledUserInfoCard = styled.div`  
  padding: 30px;
`;

export const StyledUserInfoMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const StyledUserImage = styled.img`
  border-radius: 50%;
`;

export const StyledUserName = styled.h4`
  line-height: 1.235;
  color: #11142d;
`;

export const StyledDivider = styled.div`
  position: relative;
  &:after{
    content: "";
    width: 100%;
    height: 1px;
    background-color: #ecf0f2;
    position: absolute;
    top: 0;
    left: 0;
  };
`;

export const StyledInfoTitle = styled.span`
  color: #777e89;
  font-size: 16px;
`;

export const StyledInfoText = styled.h6`
  color: #11142d;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;