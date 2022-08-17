import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Books from "./Pages/Books/Books.component.jsx";
import { useSelector } from "react-redux";
import Login from "./Pages/SignInAndSignUp/login.component";
import BookDetail from "./components/BookDetail/bookDetail.component";
import MyReader from "./components/epub-reader/epub-reader.component";
import Checkout from "./Pages/checkout/checkout.component";
import SignUp from "./Pages/SignInAndSignUp/SignUp.component";
import Header from "./components/Header/Header";
import BookUpload from "./Pages/BookUpload/bookUpload.comonent";
import Lost from "./Pages/404Lost/lost.coponent";
import MyBooks from "./Pages/myBooks/myBooks.component";
function App() {
  const { isLoggedIn } = useSelector((state) => state.loginOrLogout);
  return (
    <>
      {isLoggedIn ? <Header /> : null}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Homepage /> : <Login />} />
        <Route path="/books" element={isLoggedIn ? <Books /> : <Login />} />
        <Route
          path="/detail/:bookId"
          element={isLoggedIn ? <BookDetail /> : <Login />}
        />
        <Route
          path="/read/:bookId"
          element={isLoggedIn ? <MyReader /> : <Login />}
        />
        <Route
          path="/checkout"
          element={isLoggedIn ? <Checkout /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Homepage /> : <SignUp />}
        />
        <Route path="/login" element={isLoggedIn ? <Homepage /> : <Login />} />
        <Route
          path="/upload"
          element={isLoggedIn ? <BookUpload /> : <Login />}
        />
        <Route path="/*" element={<Lost />} />
        <Route path="/MyBooks" element={<MyBooks />} />
      </Routes>
    </>
  );
}

export default App;
