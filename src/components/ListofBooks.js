import React from "react";
import CurrentReading from "./CurrentReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import SearchIcon from "./SearchIcon";
function ListofBooks() {
  return (
    <React.Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentReading />
            <WantToRead />
            <Read />
          </div>
        </div>
        <SearchIcon />
      </div>
    </React.Fragment>
  );
}

export default ListofBooks;
