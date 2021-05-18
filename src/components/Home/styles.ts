import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20fr 50fr 20fr;

  column-gap: 60px;
  margin: 15px 5em 0 5em;
  overflow: hidden;
`;

export const Cola = styled.div`
  height: 97vh;
  display: flex;
  flex-direction: column;
  #profile {
    display: flex;
    border-radius: 10px;
    padding: 15px;
    margin-top: 7em;
    background-color: var(--secondary-bg-color);
    height: 7em;
    color: var(--primary-text-color);
    align-items: center;
  }
  #head {
    display: inline-flex;
    color: white;
    align-items: center;
    b {
      margin-left: 10px;
    }
  }
`;

export const Logo = styled.div`
  display: inline-flex;
  color: var(--secondary-red);
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 10px;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export const Colb = styled.div`
  margin: 10px 3em 0 3em;
  height: 97vh;
  #search{
    background-color: var(--secondary-bg-color);
    display: inline-flex;
    border-radius: 9px;
    align-items: center;
    width: 100%inherit;
  }
  #img:hover{
    cursor: pointer;
    fill: green;
  }
`;

export const Colc = styled.div`
  display: flex;
  padding: 10px;
`;

export const Input = styled.input`
  color: white;
  width: 30vw;
  background: none;
  height: 28px;
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
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
  overflow: hidden;
`;

export const Head = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  height: 55px;
  width: 100%;
  background-color: #23272a;
  align-items: center;
`;
export const Pic = styled.div`
  width: 39px;
  height: 39px;
  background-color: var(--primary-blue);
  border-radius: 50%;
`;

export const Content = styled.div`
  height: 100%;
  margin: 15px;
  font-weight: 400;
  color: #feefea;
`;
