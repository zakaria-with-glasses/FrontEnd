import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 6vh;
`;

export const Body = styled.div``;

export const Box = styled.div`
  margin: 10px 20px 10px 20px;
  font-family: "Roboto";
  padding: 10px;
`;

export const Text = styled.h3`
  color: white;
  font-weight: 10px;
`;

export const Logo = styled.div`
  color: var(--secondary-red);
  text-transform: uppercase;
  letter-spacing: 5px;
  padding: 5%;
  line-height: 6vh;
  font-weight: 900;
`;
export const Pack = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;

export const List = styled.li`
  list-style-type: none;
  display: inline;
  padding: 0 10px;
  a {
    display: block;
    color: white;
    display: inline;
    text-decoration: none;
    text-align: center;
  }
`;

export const Login = styled.button`
  border: none;
  border-radius: 7px;
  padding: 10px 30px 10px 30px;
  background-color: var(--secondary-red);
  color: #ffffff;
  margin-left: 45em;
`;
