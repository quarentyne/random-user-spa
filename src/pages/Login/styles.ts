import styled from "styled-components";

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

export const StyledLogBlock = styled.div`
  margin-top: -20px;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: center;
  align-items: center;
`;