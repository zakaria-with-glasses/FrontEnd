import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20fr 50fr 20fr;
  column-gap: 60px;
  margin: 10px 10em 0 10em;
`;

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  color: var(--secondary-red);
  text-transform: uppercase;
  letter-spacing: 5px;
  span {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  color: white;
  width: 40vw;
  background: none;
  border-radius: 5px;
  height: 20px;
  outline: none;
  border: none;
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
  align-items: center;
  border-radius: 50%;
`;

export const Content = styled.div`
  height: 100%;
  margin: 15px;
  font-weight: 400;
  color: #feefea;
`;
