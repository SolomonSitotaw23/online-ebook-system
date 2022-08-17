import React, { useState } from "react";

import { useFormik } from "formik";

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
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { login } from "../../redux/login";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../components/graphql";
import { useDispatch } from "react-redux";
import { Alert, LinearProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import validationSchema from "../../utils/validation/Validation";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { makeStyles } from "@material-ui/core/styles";

const SignUp = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [isAuthor, setIsAuthor] = useState(false);
  console.log(isAuthor);
  const handleChange = () => {
    setIsAuthor(!isAuthor);
  };
  const registeruserCallback = () => {
    registeruser();
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      registeruserCallback();
    },
  });
  const theme = createTheme();

  // graphql
  const [registeruser, { loading }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      dispatch(login(data["signup"]));
    },
    onError: ({ graphQLErrors }) => {
      setErrors(graphQLErrors);
    },
    variables: {
      first_name: formik.values.first_name,
      last_name: formik.values.last_name,
      email: formik.values.email,
      password: formik.values.password,
      isAuthor: isAuthor,
    },
  });

  // !styles

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
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            autoComplete="given-name"
            variant="outlined"
            margin="normal"
            fullWidth
            id="first_name"
            label="First Name"
            autoFocus
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name"
            autoComplete="family-name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <TextField
            variant="outlined"
            margin="normal"
            label="confirm password"
            name="confirmPassword"
            type="password"
            required
            fullWidth
            id="password"
            autoComplete="new-password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isAuthor}
                onChange={handleChange}
                label=""
                name="isAuthor"
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkAddedIcon />}
              />
            }
            label="I'm an Author"
          />
          {errors
            ? errors.map(function (error) {
                return <Alert severity="error">{error.message}</Alert>;
              })
            : null}{" "}
          {loading ? <LinearProgress /> : null}
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            margin="normal"
            type="submit"
            sx={{
              marginTop: "4rem",
            }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <p>
                Already have an account?
                <Link to="/login"> Sign in</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
