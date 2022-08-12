import React from "react";
import { useParams } from "react-router-dom";
import { GET_BOOK_DETAIL } from "../graphql";
import { useQuery } from "@apollo/client";
import Spinner from "../spinner/spinner.component";
import { Link } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();

  const { loading, error, data } = useQuery(GET_BOOK_DETAIL, {
    variables: { id: bookId },
  });
  if (loading) return <Spinner />;

  if (error) return `Error! ${error}`;
  return (
    <div className="carousel sec__container">
      <div className="carousel__wrapper">
        <div className="carousel__explanation">
          <div className="book__author">
            <figure className="book__author-img">
              <img
                src="https://images.unsplash.com/photo-1610669057941-53c6b567554a?w=400&q=100"
                alt="..."
              />
            </figure>
            <span className="book__author-name">Yismaeke Worku</span>
          </div>
          <div className="book__name">{data.books_by_pk.title}</div>

          <div className="feedback">
            <div className="rating">
              <span className="rating__stars"></span>
              <div className="rating__number">
                <span className="rating__score">4.5</span>
                <div className="rating__reviews">(1346)</div>
              </div>
            </div>
            <div className="marketing__badge">
              <span className="marketing__badge-icon">
                <i className="icon ri-pulse-fill"></i>
              </span>
              <span className="marketing__badge-title">BESTSELLER</span>
            </div>
          </div>

          <div className="book__summary"></div>
          <div className="carousel__action">
            <a className="btn btn__lg btn__primary rounded__pill" href>
              Buy Now
            </a>

            <div className="product__price rounded__pill">
              <i className="icon ri-money-dollar-circle-line"></i>
              <div className="price__content">
                <div className="old__price">
                  32<span className="old__price-fraction">90</span>
                </div>
                <div className="price">
                  <span className="price__fraction"></span>
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
              src="http://books.good-amharic-books.com/rocket-cov.jpg"
              alt="..."
            />
          </figure>
          <figure className="carousel__media-item">
            <img
              src="http://books.good-amharic-books.com/rocket-cov.jpg"
              alt="..."
            />
          </figure>
          <figure className="carousel__media-item">
            <img
              src="http://books.good-amharic-books.com/rocket-cov.jpg"
              alt="..."
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
