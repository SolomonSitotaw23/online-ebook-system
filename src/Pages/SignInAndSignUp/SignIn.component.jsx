import React from "react";
import { Formik, Form } from "formik";
import TextFiled from "../../components/TextField/textField.component";
import * as Yup from "yup";
const SignIn = () => {
  const validate = Yup.object({
    email: Yup.string()
      .max(50, "email is to long")
      .required("email is required"),
    password: Yup.string()
      .min(8, "password must be more than 8 characters")
      .required("password is required"),
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
        <div className="form-container sign-in-container">
          <Form>
            <h1>Log in</h1>
            <TextFiled name="email" placeholder="email" type="email" />
            <TextFiled name="password" placeholder="password" type="password" />
            <a href>Forgot your password?</a>
            <button type="submit">Sign In</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignIn;
