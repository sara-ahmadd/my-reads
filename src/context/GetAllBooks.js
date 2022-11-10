import { useEffect, useState } from "react";
import { getAll, update } from "../BooksAPI";

function GetAllBooks() {
  const [books, setBooks] = useState({
    loading: true,
    books: [],
    error: "",
  });

  useEffect(() => {
    getAll().then((res) => {
      setBooks({
        loading: false,
        books: res,
        error: "",
      });
    });
  }, []);

  const changeBookShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      getAll().then((res) => {
        setBooks({
          loading: false,
          books: res,
          error: "",
        });
      });
    });
  };

  return [books, setBooks, changeBookShelf];
}

export default GetAllBooks;
