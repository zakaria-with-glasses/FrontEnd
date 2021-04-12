import styled from "styled-components";

export const Register = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 850px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
`;
export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;
export const Label = styled.label`
  color: white;
  font-size: 20px;
`;
export const Input = styled.input`
  width: 739px;
  height: 45px;
  margin-bottom: 30px;
  padding: 10px;
  font-size: 16px;
  background: #4e4e50;
  box-sizing: border-box;
  border: ${(props) => props.border || "1px solid grey"};
  outline: 0;
  border-radius: 4px;
  :focus {
    border: 1px solid #c3073f;
  }
`;
export const Button = styled.button`
  outline: 0;
  font-size: 1em;
  font-weight: 600;
  height: 45px;
`;
