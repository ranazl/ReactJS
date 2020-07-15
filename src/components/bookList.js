import React from "react";

function BookList(props) {
  const { books } = props;
  const listItems = books.map((book) => (
    <div className="mt-3">
      <h3>Top selling {book}</h3>
    </div>
  ));
  return <ul>{listItems}</ul>;
}

export default BookList;
