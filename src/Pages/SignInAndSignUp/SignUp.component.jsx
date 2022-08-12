import React from "react";
import { Formik, Form } from "formik";
import TextFiled from "../../components/TextField/textField.component";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, "first name is to long")
      .required("Please enter your first name"),
    lastName: Yup.string()
      .max(20, "last name is to long")
      .required("Please enter your last name"),
    email: Yup.string()
      .max(50, "email is to long")
      .required("please enter a valid email"),
    password: Yup.string()
      .min(8, "password must be more than 8 characters")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("please confirm your password"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formic) => (
        <div className="form-container sign-up-container">
          <Form>
            <h1>Create an account</h1>
            <span></span>
            <TextFiled name="firstName" type="text" placeholder="First Name" />
            <TextFiled name="lastName" type="text" placeholder="Last Name" />
            <TextFiled name="email" type="email" placeholder="Email" />
            <TextFiled name="password" type="password" placeholder="Password" />
            <TextFiled
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />

            <a href>Forgot your password?</a>
            <button type="submit">Sign up</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
