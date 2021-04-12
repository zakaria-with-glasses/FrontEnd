import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Sidenav, Separator, EdButton } from "./styles";
import Post from "../Post";

const Index = () => {
  const [Logged, setLogged] = useState(true);
  if (!Logged) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Grid>
        <Sidenav>
          <EdButton href="/"></EdButton>
          <Separator></Separator>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <EdButton></EdButton>
          <Separator></Separator>
          <EdButton></EdButton>
          <EdButton></EdButton>
        </Sidenav>
        <Post></Post>
      </Grid>
    );
  }
};

export default Index;
