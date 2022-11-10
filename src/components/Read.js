import React, { useContext } from "react";
import Book from "./Book";
import Shelf from "./Shelf";
import Books from "../context/withFetcbooks";
function Read() {
  const [books] = useContext(Books);
  return (
    <React.Fragment>
      <Shelf section={"Read"}>
        <ol className="books-grid">
          {books.books
            .filter((x) => x.shelf === "read")
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

export default Read;
