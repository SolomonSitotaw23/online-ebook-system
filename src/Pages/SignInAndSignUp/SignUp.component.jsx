import React from "react";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../components/graphql";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/login";
import { useForm } from "../../utils/hooks";

import { TextField, Container, Button, Stack, Alert } from "@mui/material";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const registeruserCallback = () => {
    registeruser();
  };
  const { onChange, onSubmit, values } = useForm(registeruserCallback, {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registeruser, { loading }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      dispatch(login(data["signup"]));
    },
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors);
    },
    variables: {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    },
  });
  return (
    <Container spacing={2} maxWidth="sm">
      <h3>Register</h3>
      <p>register below</p>
      <Stack spacing={2} paddingBottom={2}>
        <TextField label="first name" name="first_name" onChange={onChange} />
        <TextField label="last name" name="last_name" onChange={onChange} />
        <TextField label="email" name="email" onChange={onChange} />
        <TextField
          label="password"
          name="password"
          type="password"
          onChange={onChange}
        />
        <TextField
          label="confirm password"
          name="confirmPassword"
          type="password"
          onChange={onChange}
        />
      </Stack>
      {errors
        ? errors.map(function (error) {
            return <Alert severity="error">{error.message}</Alert>;
          })
        : null}
      <Button variant="contained" onClick={onSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default SignUp;
