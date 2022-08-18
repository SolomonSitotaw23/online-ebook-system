import React, { useState } from "react";
import { Button, TextareaAutosize } from "@material-ui/core";
import { Cloud } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { Container, CssBaseline, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const FILE_UPLOAD_MUTATION = `
mutation addBook($book_file_base64str: String!,$book_file_name: String!,$book_file_type: String!,$comment: String!,$cover_photo_base64str: String!,$cover_photo_name: String!,$description: String!,$ISBN: String!,$edition: Int!,$page_size: Int!,$price: numeric!,$sample_file_base64str: String!,$sample_file_name:String! , $sample_file_type:String! ,$title: String!,$cover_photo_type: String!,$rating:Float!,$author:String!) {
  addBook(book_file_base64str: $book_file_base64str, book_file_name: $book_file_name, book_file_type: $book_file_type, comment: $comment, cover_photo_base64str: $cover_photo_base64str, cover_photo_name: $cover_photo_name, description: $description, ISBN: $ISBN, edition: $edition, page_size: $page_size, price: $price, sample_file_base64str: $sample_file_base64str, sample_file_name: $sample_file_name, sample_file_type: $sample_file_type, title: $title, cover_photo_type: $cover_photo_type, author:$author, rating: $rating) {
    file
    cover_photo
    sample
    
  }
}
`;
function BookUpload() {
  const navigate = useNavigate();
  const [textfile, setTextFile] = useState(null);
  const [textbase64, textsetBase64Str] = useState(null);
  const [textfilepath, setTextFilePath] = useState(null);
  const [samplefile, setSampleFile] = useState(null);
  const [samplebase64, samplesetBase64Str] = useState(null);
  const [samplefilepath, setSampleFilePath] = useState(null);
  const [imagefile, setImageFile] = useState(null);
  const [imagebase64, imagesetBase64Str] = useState(null);
  const formik = useFormik({
    initialValues: {
      booktitle: "",
      isbn: "",
      pageSize: "",
      price: "",
      description: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      fileUpload(textfile, imagefile, samplefile);
      navigate("/books");
    },
  });

  const user = useSelector((state) => state.loginOrLogout.user);

  const [imagefilepath, setImageFilePath] = useState(null);
  // !--------------------------------------------------------------

  const fileUpload = (textfile, imagefile, samplefile) => {
    console.log(user.id);
    // make fetch api call to upload file
    const book_file_name = textfile.name;
    const book_file_type = textfile.type;
    const cover_photo_name = imagefile.name;
    const cover_photo_type = imagefile.type;
    const sample_file_name = samplefile.name;
    const sample_file_type = samplefile.type;

    const comment = "No comment";
    const author_id = user.id; //add the user id from the localstorage

    const variables = {
      description: formik.values.description,
      ISBN: formik.values.isbn,
      edition: 1,
      page_size: formik.values.pageSize,
      price: formik.values.price,
      title: formik.values.title,
      rating: 0,
      comment: comment,
      author: author_id,
      book_file_name: book_file_name,
      book_file_type: book_file_type,
      book_file_base64str: textbase64,
      cover_photo_name: cover_photo_name,
      cover_photo_type: cover_photo_type,
      cover_photo_base64str: imagebase64,
      sample_file_name: sample_file_name,
      sample_file_type: sample_file_type,
      sample_file_base64str: samplebase64,
    };
    const url = "http://localhost:8080/v1/graphql";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "myadminsecretkey",
      },
      body: JSON.stringify({
        query: FILE_UPLOAD_MUTATION,
        variables: variables,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.errors) {
          console.log(res.errors);
          alert("Something went wrong");
        } else {
          console.log(res);

          setTextFilePath(res.data.addBook.file);
          setImageFilePath(res.data.addBook.cover_photo);
          setSampleFilePath(res.data.addBook.sample);
        }
      });
  };

  const textOnChange = (e) => {
    setTextFile(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = function () {
      const base64 = btoa(reader.result);
      textsetBase64Str(base64);
    };

    reader.onerror = function () {
      console.log("Unable to parse file");
    };
  };
  const imageOnChange = (e) => {
    setImageFile(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = function () {
      const base64 = btoa(reader.result);
      imagesetBase64Str(base64);
    };

    reader.onerror = function () {
      console.log("Unable to parse file");
    };
  };
  const sampleOnChange = (e) => {
    setSampleFile(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = function () {
      const base64 = btoa(reader.result);
      samplesetBase64Str(base64);
    };

    reader.onerror = function () {
      console.log("Unable to parse file");
    };
  };

  // !styles

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
    <Container component="main" maxWidth="sm">
      <CssBaseline />

      <div className="App">
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <h1>Upload Book</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                variant="outlined"
                required
                margin="normal"
                fullWidth
                id="title"
                label="Book Title"
                autoFocus
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="isbn"
                name="isbn"
                label="ISBN"
                value={formik.values.isbn}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="pageSize"
                name="pageSize"
                label="Page Size"
                value={formik.values.pageSize}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="price"
                name="price"
                label="price"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <span>File </span>
            </Grid>

            <Grid item xs={12} sm={6}>
              <input type="file" onChange={textOnChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <span>sample </span>
            </Grid>

            <Grid item xs={12} sm={6}>
              <input type="file" onChange={sampleOnChange} required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <span>Image </span>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input type="file" onChange={imageOnChange} required />
            </Grid>
            <br />
          </Grid>{" "}
          <TextareaAutosize
            variant="outlined"
            margin="normal"
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            margin="normal"
            type="submit"
            sx={{
              marginTop: "4rem",
            }}
            startIcon={<Cloud />}
          >
            Upload
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default BookUpload;
