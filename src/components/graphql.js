import { gql } from "@apollo/client";

export const LOG_IN = gql`
  query LOG_IN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      first_name
      email
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation SIGNUP(
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
  ) {
    signup(
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
    ) {
      token
      first_name
      email
      id
      isAuthor
      last_name
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
