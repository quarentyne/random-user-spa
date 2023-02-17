import styled from "styled-components";

export const StyledLogButton = styled.button`
  padding: 15px;
  border: none;
  font-size: 24px;
  border-radius: 5px;
  background-color: #fff3b4;
  &:hover{
    cursor: pointer;
    background-color: #e7dca5;
  };
`;

export const StyledLogoutBlock = styled.div`
  margin-top: -20px;
  height: 100vh;
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