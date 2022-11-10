import React from 'react'


function Shelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.section}</h2>
      <div className="bookshelf-books">{props.children}</div>
    </div>
  );
}

export default Shelf
