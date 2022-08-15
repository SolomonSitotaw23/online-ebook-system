import React from "react";
import "../../STYLES/Books.styles.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart";

const Book = ({ books }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <>
      {books.map((book) => (
        <div className="books" key={book.id}>
          <div>
            <img
              src={`http://localhost:5000${book.cover_photo}`}
              alt=""
              className="book-img"
            />
          </div>
          <div className="descp">
            <h2 className="book-name">{book.title}</h2>
            <h3 className="author">by Jojo Myoes</h3>
            <h3 className="rating">1.987 rating</h3>
            <p className="info">{book.description}</p>
            <div className="book__buttons">
              <Link to={`/detail/${book.id}`}>
                <button type="submit">See the Book</button>
              </Link>
              <div>
                <button onClick={() => dispatch(addItem(book))}>+ cart </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Book;
