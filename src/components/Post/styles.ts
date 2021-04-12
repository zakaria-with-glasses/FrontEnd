import styled from "styled-components";

export const MessageContainer = styled.div`
  background: #363a3e;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  width: calc(100% - 50%);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Grouper = styled.div`
  display: flex;
  display: inline-block;
  height: 100vh;
  scroll-behavior: smooth;
  width: 100%;
  display: block;
  flex-direction: column-reverse;
  margin: 0 auto;
`;

export const Block = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 850px;
  min-width: 850px;
  height: 490px;
  background: #2c2f33;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  overflow: hidden;
`;

export const Head = styled.div`
  position: relative;
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #23272a;
  align-items: center;
`;
export const Pic = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  background-color: white;
  overflow: hidden;
  align-items: center;
  border-radius: 50%;
  transition: 0.5s;
  left: 20px;
  > img {
    background-size: cover;
  }
`;

export const User = styled.div`
  width: 100%;
  height: 50px;
  background-color: #202225;
`;

export const Content = styled.div`
  height: 100%;
  margin: 15px;
  font-weight: 400;
  color: #feefea;
`;
export const Load = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 0.6s ease-in-out infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
