import React, { Fragment } from "react";
import { Header, Body, Box, Text, Logo, Pack, List, Login } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../Assets/afk.svg";
let index: React.FC = () => {
  return (
    <Fragment>
      <Header>
        <div style={{ display: "flex" }}>
          <img src={logo} alt="LOGO" />
          <Logo>
            <span>pyrite</span>
          </Logo>
        </div>
        <Pack>
          <React.Fragment>
            <List>
              <Link to="#">INTRO</Link>
            </List>
            <List>
              <Link to="#">WHO</Link>
            </List>
            <List>
              <Link to="#">WHAT</Link>
            </List>
            <List>
              <Link to="#">TEAM</Link>
            </List>
          </React.Fragment>
        </Pack>
        <Login>Log In</Login>
      </Header>
      <Body>
        <Box>
          <Text>
            Upgrade your Mentality
          </Text>
        </Box>
      </Body>
    </Fragment>
  );
};
export default index;
