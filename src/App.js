import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route, useParams } from "react-router-dom";

const BooksPage = (props) => {
  const { id } = useParams();
  console.log(props);
  return <div>Hello{id}</div>;
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<BooksPage />} />
    </Routes>
  );
}

export default App;
