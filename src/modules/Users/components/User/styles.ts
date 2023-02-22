import styled from "styled-components";

interface IWrapperProps{
  sex: string;
};

export const StyledUserCardWrapper = styled.div<IWrapperProps>`
  width: 450px;
  background-color: ${props => props.sex === "male" ? "#3399ff" : "#ff99ff"};
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 3px #111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  >p{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    width: 270px;
    >span{
      font-weight: 700;
    }
  }
`;