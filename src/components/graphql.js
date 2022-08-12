import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    books {
      id
      page_size
      file
      price
      description
      price
      published_at
      rating
      sample_file
      title
      edition
      created_at
      cover_photo
    }
  }
`;

export const GET_BOOK_DETAIL = gql`
  query GET_BOOK_DETAILS($id: uuid!) {
    books_by_pk(id: $id) {
      cover_photo
      created_at
      description
      discount_id
      edition
      id
      file
      page_size
      price
      published_at
      rating
      title
      updated_at
      sample_file
    }
  }
`;
