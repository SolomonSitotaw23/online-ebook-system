import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner.component";
import { useQuery } from "@apollo/client";
import { GET_BOOK_DETAIL } from "../graphql";
const MyReader = () => {
  const [location, setLocation] = useState(null);

  const { bookId } = useParams();

  const { loading, error, data } = useQuery(GET_BOOK_DETAIL, {
    variables: { id: bookId },
  });
  if (loading) return <Spinner />;

  if (error) return `Error! ${error}`;

  // And your own state logic to persist state
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
  };
  return (
    <div style={{ height: "100vh" }}>
      {console.log(data.books_by_pk.file)}
      <ReactReader
        title={data.books_by_pk.title}
        location={location}
        locationChanged={locationChanged}
        url={`http://localhost:5000${data.books_by_pk.file}`}
      />
      {console.log(`"http://localhost:5000",${data.books_by_pk.file}`)}
    </div>
  );
};

export default MyReader;
