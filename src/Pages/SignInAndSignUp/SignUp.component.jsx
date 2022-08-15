import React from "react";
// ///////////////

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../components/graphql";
import { login } from "../../redux/login";
import { useForm } from "../../utils/hooks";
import { Link } from "react-router-dom";
import {
  TextField,
  Container,
  Button,
  Alert,
  Checkbox,
  LinearProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

// ///////

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
  const { onChange, onSubmit, values } = useForm(registeruserCallback, {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registeruser, { data, loading }] = useMutation(SIGN_UP, {
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
      isAuthor: isAuthor,
    },
  });
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
          <Typography component="h1" variant="h5">
            <h3>Register</h3>
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  name="first_name"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  name="last_name"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="confirm password"
                  name="confirmPassword"
                  type="password"
                  required
                  fullWidth
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              {errors
                ? errors.map(function (error) {
                    return <Alert severity="error">{error.message}</Alert>;
                  })
                : null}
            </Grid>

            {loading ? <LinearProgress /> : null}
            <Button
              type="submit"
              fullWidth
              onClick={onSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <p>
                  Already have an account?
                  <Link to="/login"> Sign in</Link>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
