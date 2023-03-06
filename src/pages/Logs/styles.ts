import styled from "styled-components";

export const StyledLoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(64, 76, 84, 0.7);
  z-index: 100;
  margin-top: -75px;
`;

export const StyledLogButton = styled.button`
  padding: 15px;
  border: none;
  font-size: 24px;
  border-radius: 5px;
  background-color: #66d9ff;
  &:hover{
    cursor: pointer;
    background-color: #00bfff;
  };
  transition: all 0.1s ease-out;
`;

export const StyledLogoutBlock = styled.div`
  margin-top: -20px;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoginBlock = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledLoginLanguageBlock = styled.div`
  position absolute;
  background: white;
  padding: 3px;
  border-radius: 6px;
  top: 1%;
  right: 1%;
`;