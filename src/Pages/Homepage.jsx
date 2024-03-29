import React from "react";
import Spinner from "../components/spinner/spinner.component";
import "../STYLES/homepage.style.scss";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../components/graphql";
import { Typography, Rating } from "@mui/material";

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <Spinner />;
  if (error) return <p>error</p>;
  return (
    <>
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
            <div className="book__name">{data.books[0].title}</div>

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

            <div className="book__summary">{data.books[0].description}</div>
            <div className="carousel__action">
              <div className="product__price rounded__pill">
                <i className="icon ri-money-dollar-circle-line"></i>
                <div className="price__content">
                  <div className="old__price"></div>
                  <div className="price">
                    {data.books[0].price}
                    <span className="price__fraction">00</span>
                  </div>
                </div>
                <div className="discount__rate">%22</div>
              </div>
            </div>
          </div>

          <div className="carousel__media">
            <figure className="carousel__media-item">
              <img
                src={`http://localhost:5000${data.books[0].cover_photo}`}
                alt="..."
              />
            </figure>
            <figure className="carousel__media-item">
              <img
                src={`http://localhost:5000${data.books[0].cover_photo}`}
                alt="..."
              />
            </figure>
            <figure className="carousel__media-item">
              <img
                src={`http://localhost:5000${data.books[0].cover_photo}`}
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
