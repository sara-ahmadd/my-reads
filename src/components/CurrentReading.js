import React from "react";
import { useContext } from "react";
import Book from "./Book";
import Shelf from "./Shelf";
import Books from "../context/withFetcbooks";
function CurrentReading() {
  const [books] = useContext(Books);
  return (
    <React.Fragment>
      <Shelf section={"Currently Reading"}>
        <ol className="books-grid">
          {books.books
            .filter((x) => x.shelf === "currentlyReading")
            .map((b) => {
              return (
                <li key={b.id}>
                  <Book
                    book={b}
                    title={b.title}
                    authors={b.authors[0]}
                    image={b.imageLinks.smallThumbnail}
                    value={b.shelf}
                  />
                </li>
              );
            })}
        </ol>
      </Shelf>
    </React.Fragment>
  );
}

export default CurrentReading;
