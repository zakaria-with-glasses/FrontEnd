import React, { Fragment } from "react";
import { Header, Body, Box, Text, Logo, Pack, List, Login } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
let index: React.FC = () => {
  return (
    <Fragment>
      <Header>
        <div style={{ display: "flex" }}>
          <img src={logo} alt="LOGO" />
          <Logo>
            <span>ACELIFE</span>
          </Logo>
        </div>
        <Pack>
          <List>
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
          </List>
        </Pack>
        <Login>Log In</Login>
      </Header>
      <Body>
        <Box>
          <Text>
            <h1>Upgrade your Mentality</h1>
          </Text>
        </Box>
      </Body>
    </Fragment>
  );
};
export default index;
