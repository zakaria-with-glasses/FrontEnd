import React from "react";
import { Input, Register, Title, Label, Button } from "./styles.js";

const index = () => {
  localStorage.setItem(
    "fUCKYOU",
    "bitch did you sust tried to fetch local storage!"
  );
  return (
    <div>
      <Register>
        <Title>Register Here</Title>
        <Label htmlFor="Username">Username:</Label>
        <Input />
        <Label htmlFor="E-Mail">Email:</Label>
        <Input />
        <Label htmlFor="Password">Password:</Label>
        <Input />
        <Button>Hi</Button>
      </Register>
    </div>
  );
};

export default index;
