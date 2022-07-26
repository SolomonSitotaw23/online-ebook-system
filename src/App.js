import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Books from "./Pages/Books/Books.component.jsx";
import PreviewBook from "./Pages/PreviewBooks/PreviewBook.component";
import SigninAndSignUP from "./Pages/SignInAndSignUp/SigninAndSignUP";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/books" element={<Books />} />
      <Route path="/preview" element={<PreviewBook />} />
      <Route path="/preview/:id" element={<PreviewBook />} />
      <Route path="/signin" element={<SigninAndSignUP />} />
    </Routes>
  );
}

export default App;
