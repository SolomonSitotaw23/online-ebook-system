import React from "react";
import "../../STYLES/Books.styles.scss";
import { GET_BOOKS } from "../../components/graphql";
import Spinner from "../../components/spinner/spinner.component";
import Book from "../../components/Book/book.component";
import { useQuery } from "@apollo/client";
const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS, {
    fetchPolicy: "no-cache",
  });
  if (loading) return <Spinner />;
  if (error) return <p>error</p>;
  return (
    <>
      <main>
        <Book books={data.books} />
      </main>
    </>
  );
};

export default Books;
