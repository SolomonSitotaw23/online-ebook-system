import React from "react";
// //////

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LinearProgress } from "@mui/material";
// /

import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOG_IN } from "../../components/graphql";
import { useForm } from "../../utils/hooks";
import { TextField, Container, Button, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/login";
import { Link } from "react-router-dom";
const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.loginOrLogout);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const loginUserCallback = () => {
    loginUser();
  };
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useLazyQuery(LOG_IN, {
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
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}

        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChange}
            />
            {errors
              ? errors.map(function (error) {
                  return <Alert severity="error">{error.message}</Alert>;
                })
              : null}{" "}
            {loading ? <LinearProgress /> : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <p variant="body2">
                  Don't have an account?
                  <Link to="/register"> Sign Up</Link>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
