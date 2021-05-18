import styled from "styled-components";
import Bg from "../../Assets/bg.svg"

export const Container = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: ${Bg} no-repeat;
`;

export const Box = styled.div`
  box-shadow: -7px 8px 12px -1px rgba(0,0,0,0.75);
    position: absolute;
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: var(--third-bg-color);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    label{
      color: white;
      padding: 10px 0 10px 10px;
    }
    #A{
      padding: 10px;
    }
    #B{
      width: 15rem;
    }
`;

export const Frame = styled.div`
  background-color: red;
`;

export const Input = styled.input<{ border?: string }>`
  margin: 5px 5px 5px 5px;
  width: 600px;
  height: 45px;
  padding: 10px;
  color: white;
  font-size: 15px;
  font-family: "Verdana";
  border: ${(props) => props.border || "None"};
  outline: 0;
  border-radius: 4px;
  :focus {
    border: 2.5px solid var(--primary-blue);
  }
  background-color: var( --third-bg-color);
`;

export const Cntr = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  i{ padding: 10px; }
`;