import styled from "styled-components";
export const Wrapper = styled.div`
  box-sizing: border-box;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;
export const Upper = styled.div`
  display: inline-block;
  margin: 40px auto;
  margin-right: 14px;
  margin-left: 14px;
  background-color: #848484;
  margin-top: 0 auto;
  border-radius: 5px;
  height: 92vh;
  padding: 30px;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Down = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 10rem;
  align-items: center;
`;
export const Separator = styled.div`
  width: 700px;
  border: 1.5px solid black;
  height: 0;
`;
export const Link = styled.a`
  padding: 35px;
`;
export const Button = styled.button`
  height: 34px;
  border: none;
  background-color: #39b7cd;
  padding: 10px;
  border-radius: 4px;
  :active,
  :focus {
    background-color: #14c8e7;
    border: none;
    outline: none;
  }
`;
export const Picture = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 5px;
`;
export const Name = styled.div`
  width: 800px;
  font-size: 30px;
  text-align: center;
  justify-content: center;
`;
export const Bio = styled.div`
  width: 600px;
  font-size: 20px;
  text-align: center;
`;
