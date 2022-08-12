import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Books from "./Pages/Books/Books.component.jsx";
// import PreviewBook from "./Pages/PreviewBooks/PreviewBook.component";
import SigninAndSignUP from "./Pages/SignInAndSignUp/SigninAndSignUP";
import BookDetail from "./components/BookDetail/bookDetail.component";
import MyReader from "./components/epub-reader/epub-reader.component";
import Checkout from "./Pages/checkout/checkout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/books" element={<Books />} />
      {/* <Route path="/preview" element={<PreviewBook />} /> */}
      <Route path="/detail/:bookId" element={<BookDetail />} />
      <Route path="/read/:bookId" element={<MyReader />} />
      <Route path="/signin" element={<SigninAndSignUP />} />
      <Route path="/books/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
