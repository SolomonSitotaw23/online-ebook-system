import React from "react";
import "./Books.styles.scss";
import Header from "../../components/Header/Header";

const Books = () => {
  return (
    <>
      <Header />

      <main>
        <div className="books">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/718ReYbwlFL.jpg"
              alt=""
              className="book-img"
            />
          </div>
          <div className="descp">
            <h2 className="book-name">After You</h2>
            <h3 className="author">by Jojo Myoes</h3>
            <h3 className="rating">1.987 rating</h3>
            <p className="info">
              It continues the story of Louisa Clark after Will's death. She is
              trying to move on.
            </p>
            <button type="submit">See the Book</button>
          </div>
        </div>

        <div className="books">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/91JxVjINNsL.jpg"
              alt=""
              className="book-img"
            />
          </div>
          <div className="descp">
            <h2 className="book-name">Big Magic</h2>
            <h3 className="author">by Elizabeth Gilbert</h3>
            <h3 className="rating">1.987 rating</h3>
            <p className="info">
              Readers of all ages and walks of life have drawn inspiration from
              Elizabeth Gilbert’s books.
            </p>
            <button type="submit" id="b1">
              See the Book
            </button>
          </div>
        </div>

        <div className="books">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/9129dzchsGL.jpg"
              alt=""
              className="book-img"
            />
          </div>
          <div className="descp">
            <h2 className="book-name">A Tale for the Time Being</h2>
            <h3 className="author">by Ruth Ozeki</h3>
            <h3 className="rating">1.987 rating</h3>
            <p className="info">
              In Tokyo, sixteen-year-old Nao has decided there’s only one escape
              from her aching loneliness
            </p>
            <button type="submit" id="b2">
              See the Book
            </button>
          </div>
        </div>

        <div className="books">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg"
              alt=""
              className="book-img"
            />
          </div>
          <div className="descp">
            <h2 className="book-name">The Great Gatsby</h2>
            <h3 className="author">by F. Scott Fitzgerald</h3>
            <h3 className="rating">1.987 rating</h3>
            <p className="info">
              The novel was inspired by a youthful romance Fitzgerald had with
              socialite Ginevra King
            </p>
            <button type="submit" id="b3">
              See the Book
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Books;
