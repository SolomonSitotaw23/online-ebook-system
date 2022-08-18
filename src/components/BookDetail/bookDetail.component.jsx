import React from "react";
import { useParams } from "react-router-dom";
import { GET_BOOK_DETAIL } from "../graphql";
import { useQuery } from "@apollo/client";
import Spinner from "../spinner/spinner.component";
import { Link } from "react-router-dom";
import { Typography, Rating } from "@mui/material";

const BookDetail = () => {
  const { bookId } = useParams();

  const { loading, error, data } = useQuery(GET_BOOK_DETAIL, {
    variables: { id: bookId },
  });
  if (loading) return <Spinner />;

  if (error) return `Error! ${error}`;
  return (
    <>
      <div className="carousel sec__container">
        <div className="carousel__wrapper">
          <div className="carousel__explanation">
            <div className="book__author">
              <figure className="book__author-img">
                <img
                  src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1660819439~exp=1660820039~hmac=2f3c2e769294f85a62fb40201b68ef2fed8cf5d8d96f039b2e83c0859a7a1fad"
                  alt="..."
                />
              </figure>
              <span className="book__author-name">ተስፋየ ገብረአብ</span>
            </div>
            <div className="book__name">{data.books_by_pk.title}</div>

            <div className="feedback">
              <Typography component="legend">Rating</Typography>
              <Rating
                name="simple-controlled"
                value={2}
                readOnly
                onChange={(event, newValue) => {
                  // setValue(3);
                }}
              />

              <div className="marketing__badge">
                <span className="marketing__badge-icon">
                  <i className="icon ri-pulse-fill"></i>
                </span>
                <span className="marketing__badge-title">BESTSELLER</span>
              </div>
            </div>

            <div className="book__summary">{data.books_by_pk.description}</div>
            <div className="carousel__action">
              <div className="product__price rounded__pill">
                <i className="icon ri-money-dollar-circle-line"></i>
                <div className="price__content">
                  <div className="old__price"></div>
                  <div className="price">
                    {data.books_by_pk.price}
                    <span className="price__fraction">00</span>
                  </div>
                </div>
                <div className="discount__rate">%22</div>
              </div>
              <Link to={`/read/${data.books_by_pk.id}`}>
                {" "}
                <a className="btn btn__lg btn__primary rounded__pill" href>
                  preview
                </a>
              </Link>
            </div>
          </div>

          <div className="carousel__media">
            <figure className="carousel__media-item">
              <img
                src={`http://localhost:5000${data.books_by_pk.cover_photo}`}
                alt="..."
              />
            </figure>
            <figure className="carousel__media-item">
              <img
                src={`http://localhost:5000${data.books_by_pk.cover_photo}`}
                alt="..."
              />
            </figure>
            <figure className="carousel__media-item">
              <img
                src={`http://localhost:5000${data.books_by_pk.title.cover_photo}`}
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
