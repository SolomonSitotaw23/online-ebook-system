import { gql } from "@apollo/client";

export const LOG_IN = gql`
  query LOG_IN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      first_name
      email
      token
      isAuthor
      id
    }
  }
`;

export const SIGN_UP = gql`
  mutation SIGNUP(
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
    $isAuthor: Boolean!
  ) {
    signup(
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
      isAuthor: $isAuthor
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
      # discount_id
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

export const FILE_UPLOAD_MUTATION = `
mutation addBook($book_file_base64str: String!,$book_file_name: String!,$book_file_type: String!,$comment: String!,$cover_photo_base64str: String!,$cover_photo_name: String!,$description: String!,$ISBN: String!,$edition: Int!,$page_size: Int!,$price: numeric!,$sample_file_base64str: String!,$sample_file_name:String! , $sample_file_type:String! ,$title: String!,$cover_photo_type: String!,$rating:Float!,$author:String!) {
  addBook(book_file_base64str: $book_file_base64str, book_file_name: $book_file_name, book_file_type: $book_file_type, comment: $comment, cover_photo_base64str: $cover_photo_base64str, cover_photo_name: $cover_photo_name, description: $description, ISBN: $ISBN, edition: $edition, page_size: $page_size, price: $price, sample_file_base64str: $sample_file_base64str, sample_file_name: $sample_file_name, sample_file_type: $sample_file_type, title: $title, cover_photo_type: $cover_photo_type, author:$author, rating: $rating) {
    file
    cover_photo
    sample
    
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
