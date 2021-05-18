import React from "react";
import { Container, Box, Frame, Input, Cntr } from "./styles";
import { Formik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

interface Errors {
  email?: string;
  password?: string;
}

let index: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors: Errors = {};

        if (!values.email) {
          errors.email = "1.5px solid red";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "1.5px solid red";
        }
        if (!values.password) {
          errors.password = "1.5px solid red";
        }

        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
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
          <Container>
            <Box>
              <div id="A">
                <h1 style={{paddingBottom: "5rem", color: 'white'}}>Hey! I think it's Ur first time her<br/> Isn't it?</h1>
                <form onSubmit={handleSubmit} >
                <div>
                  <label htmlFor="Email">Email:</label>
                  <br />
                  <Input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    border={touched.email && errors.email}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="Password">Password:</label>
                  <br />
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    border={touched.password && errors.password}
                    autoComplete="off"
                  />
                </div>
                <br />
                <React.Fragment>
                  <Cntr>
                    <button type="submit">Log In</button>
                    <i>Do you have an account?</i> <Link to="/">Sign Up</Link>
                  </Cntr>
                </React.Fragment>
                </form>
              </div>
              <Frame id="B">Hello</Frame>
            </Box>
          </Container>
        );
      }}
    </Formik>
  );
};

export default index;
