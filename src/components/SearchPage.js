import React, { useState, useContext } from "react";
import Books from "../context/withFetcbooks";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [matchedResults, setMatchedResults] = useState({
    loading: true,
    data: [],
    error: "",
  });
  const [{ books }] = useContext(Books);

  const getBooksWithSpecificTitle = (updatedValue) => {
    setInputValue(updatedValue);
    search(updatedValue)
      .then((res) =>
        setMatchedResults({
          loading: false,
          data: res.map((b) => {
            books.forEach((book) => {
              if (b.id === book.id) b.shelf = book.shelf;
            });
            return b;
          }),
          error: "",
        })
      )
      .catch((err) => {
        setMatchedResults({
          loading: false,
          data: [],
          error: err,
        });
      });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => getBooksWithSpecificTitle(e.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <h1>Search For Books</h1>
        <ol className="books-grid">
          {matchedResults.data &&
            matchedResults.data.length > 0 &&
            matchedResults.data.map((b) => {
              return (
                <li key={b.id}>
                  <Book
                    book={b}
                    title={b.title}
                    authors={b.authors && b.authors[0]}
                    image={b.imageLinks && b.imageLinks.smallThumbnail}
                    value={b.shelf}
                  />
                </li>
              );
            })}
          {matchedResults.error && <h1>No Books Matching...</h1>}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
