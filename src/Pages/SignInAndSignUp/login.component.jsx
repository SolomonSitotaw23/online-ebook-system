import React from "react";

import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOG_IN } from "../../components/graphql";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/hooks";
import { TextField, Container, Button, Stack, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/login";
const Login = () => {
  //   const Context = useContext(AuthContext);
  const { isLoggedIn } = useSelector((state) => state.loginOrLogout);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  //   let navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const loginUserCallback = () => {
    // console.log("login");
    loginUser();
  };
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading, error, data }] = useLazyQuery(LOG_IN, {
    onCompleted: (data) => {
      dispatch(login(data["login"]));
    },
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors);
    },
    variables: {
      email: values.email,
      password: values.password,
    },
  });

  return (
    <Container spacing={2} maxWidth="sm">
      <h3>Login</h3>
      <p>Login below</p>
      <Stack spacing={2} paddingBottom={2}>
        <TextField label="email" name="email" onChange={onChange} />
        <TextField
          label="password"
          name="password"
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
        Login
      </Button>
    </Container>
  );
};

export default Login;
