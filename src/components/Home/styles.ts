import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "SB C C"
    "SB C C"
    "SB C C";
  height: 100vh;
  overflow: hidden;
`;
export const Sidenav = styled.div`
  grid-area: SB;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EdButton = styled.a`
  width: 48px;
  height: 48px;
  font-family: "Open Sans";
  background: var(--secondary-red);
  text-decoration: none;
  border-radius: 50%;
  outline: none;
  color: #fdfdfd;
  margin: 8px 8px 8px 8px;
  transition: 0.17s ease-out;
  cursor: pointer;
  &:hover {
    border-radius: 16px;
  }
`;
export const Separator = styled.div`
  width: 32px;
  border-bottom: 2.5px solid white;
  margin-bottom: 3px;
  margin-top: 3px;
`;

export const Logout = styled.a`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  bottom: 10px;
  outline: none;
  border: 0;
  justify-content: center;
  justify-items: center;
`;
