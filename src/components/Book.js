import { useState, useContext } from "react";
import Books from "../context/withFetcbooks";
import PropTypes from "prop-types";

function Book({ book, title, authors, image, value = "none" }) {
  const [, , changeBookShelf] = useContext(Books);
  const [shelf] = useState(value);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={(e) => changeBookShelf(book, e.target.value)}
          >
            <option value="null" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object,
  title: PropTypes.string,
  authors: PropTypes.string,
  image: PropTypes.string,
  value: PropTypes.string,
};

export default Book;
