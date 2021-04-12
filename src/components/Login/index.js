import React, { Component } from "react";
import { Login, Button, Input, Label, Title } from "./styles";
import { Formik } from "formik";
import axios from "axios";

export default class index extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "1.5px red";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "1.5px red";
          }
          if (!values.password) {
            errors.password = "1.5px red";
          }

          return errors;
        }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:4567/Login", {
              email: values.email,
              password: values.password,
            })
            .then((res) => console.log(res.data.username));
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          values,
        }) => {
          return (
            <Login>
              <Title>Log In</Title>
                <Label htmlFor="E-Mail" >Email:</Label>
                      <Input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        border={errors.email}
                        autoComplete="off"
                      />
                      <Label htmlFor="Password">Password:</Label>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        border={errors.password}
                      />
                      <Button>Hi</Button>
                </Login>
          );
        }}
      </Formik>
    );
  }
}
