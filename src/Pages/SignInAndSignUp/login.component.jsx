import React, { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  ThemeProvider,
  createTheme,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Box,
} from "@material-ui/core";
import { login } from "../../redux/login";
import { useLazyQuery } from "@apollo/client";
import { LOG_IN } from "../../components/graphql";
import { useSelector, useDispatch } from "react-redux";
import { Alert, LinearProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import validationSchema from "../../utils/validation/Validation";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// !lllllllllllllllllll
const Login = () => {
  const classes = useStyles();

  const { isLoggedIn } = useSelector((state) => state.loginOrLogout);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const loginUserCallback = () => {
    loginUser();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUserCallback();
    },
  });
  const theme = createTheme();

  // graphql
  const [loginUser, { loading }] = useLazyQuery(LOG_IN, {
    onCompleted: (data) => {
      dispatch(login(data["login"]));
    },
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors);
    },
    variables: {
      email: formik.values.email,
      password: formik.values.password,
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {errors
            ? errors.map(function (error) {
                return <Alert severity="error">{error.message}</Alert>;
              })
            : null}{" "}
          {loading ? <LinearProgress /> : null}
          <Button
            color="primary"
            variant="contained"
            className={classes.submit}
            type="submit"
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              <p variant="body2">
                Don't have an account?
                <Link to="/register"> Sign Up</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
