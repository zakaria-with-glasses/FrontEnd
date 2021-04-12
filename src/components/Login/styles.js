import styled from "styled-components";
export const Login = styled.div`
  position: absolute;
  top: 50%;
  left: 76%;
  width: 850px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0, 0.25);
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
`;
export const Label = styled.label`
  color: white;
  font-size: 20px;
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const Input = styled.input`
margin: 5px 5px 5px 5px;
  width: 739px;
  height: 45px;
  padding: 10px;
  font-size: 18px;
  box-sizing: border-box;
  border: ${(props) => props.border || "1px solid black"};
  outline: 0;
  border-radius: 4px;
  :focus {
    border: 1px solid blue;
  }
`;

export const Button = styled.button`
  outline:0; 
  font-size:1em;
  font-weight:600;
  height: 45px;
`;

