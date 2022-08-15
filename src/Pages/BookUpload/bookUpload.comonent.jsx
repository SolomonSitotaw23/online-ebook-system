import React, { useState } from "react";
import Upload from "../../components/upload/upload.component";
import { FILE_UPLOAD_MUTATION } from "../../../src/components/graphql";
import styled from "styled-components";
const BookUpload = () => {
  const [textfile, setTextFile] = useState(null);
  const [textbase64, textsetBase64Str] = useState(null);
  const [textfilepath, setTextFilePath] = useState(null);
  const [samplefile, setSampleFile] = useState(null);
  const [samplebase64, samplesetBase64Str] = useState(null);
  const [samplefilepath, setSampleFilePath] = useState(null);
  const [imagefile, setImageFile] = useState(null);
  const [imagebase64, imagesetBase64Str] = useState(null);
  const [imagefilepath, setImageFilePath] = useState(null);
  const fileUpload = (textfile, imagefile, samplefile) => {
    // make fetch api call to upload file
    const book_file_name = textfile.name;
    const book_file_type = textfile.type;
    const cover_photo_name = imagefile.name;
    const cover_photo_type = imagefile.type;
    const sample_file_name = samplefile.name;
    const sample_file_type = samplefile.type;
    const description = "some desc";
    const ISBN = "12ewdgdb";
    const edition = 8;
    const page_size = 354;
    const price = 99;
    const title = "Emegua";
    const rating = 5.0;
    const comment = "No comment";

    const variables = {
      description: description,
      ISBN: ISBN,
      edition: edition,
      page_size: page_size,
      price: price,
      title: title,
      rating: rating,
      comment: comment,
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
        "x-hasura-role": `Bearer ${localStorage.getItem("token")}`,
        // "x-hasura-admin-secret": "myadminsecretkey",
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
      // console.log(btoa(reader.result));
      // const base64 = Buffer.from(reader.result, "utf8").toString("base64");
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
      // console.log(btoa(reader.result));
      // const base64 = Buffer.from(reader.result, "utf8").toString("base64");
      samplesetBase64Str(base64);
    };

    reader.onerror = function () {
      console.log("Unable to parse file");
    };
  };
  const onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    fileUpload(textfile, imagefile, samplefile);
  };

  return (
    <BookUploadWrapper>
      <div className="App">
        <form onSubmit={onFormSubmit}>
          <h1>Book Upload</h1>
          <h1>text </h1>
          <input type="file" onChange={textOnChange} required />
          <h1>image </h1>
          <input type="file" onChange={imageOnChange} required />
          <h1>sample </h1>
          <input type="file" onChange={sampleOnChange} required />
          <br />
          <button type="submit">Upload</button>
        </form>
        <div>
          {textfilepath ? (
            <a href={`http://localhost:5000${textfilepath}`}>Open text file</a>
          ) : null}
          <br />
          {imagefilepath ? (
            <a href={`http://localhost:5000${imagefilepath}`}>Open images</a>
          ) : null}
          <br />

          {samplefilepath ? (
            <a href={`http://localhost:5000${samplefilepath}`}>
              Open sample text
            </a>
          ) : null}
        </div>
      </div>{" "}
      {/* <Upload /> */}
    </BookUploadWrapper>
  );
};

const BookUploadWrapper = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BookUpload;
