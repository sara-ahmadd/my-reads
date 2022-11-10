import "./App.css";
import SearchPage from "./components/SearchPage";
import ListofBooks from "./components/ListofBooks";
import { Routes, Route } from "react-router-dom";
import Books from "./context/withFetcbooks";
import GetAllBooks from "./context/GetAllBooks";
import NotFound from "./components/NotFound";

function App() {
  const [books, setBooks, changeBookShelf] = GetAllBooks();

  return (
    <Books.Provider value={[books, setBooks, changeBookShelf]}>
      <div className="app">
        <Routes>
          <Route path="/" element={<ListofBooks />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Books.Provider>
  );
}

export default App;
