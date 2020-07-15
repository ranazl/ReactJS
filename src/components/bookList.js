import React from "react";

function BookList(props) {
  const { books } = props;
  const listItems = books.map((book) => (
    <div className="mt-3">
      <h3>Top selling</h3>
      <p>{book}</p>
    </div>
  ));
  return <ul>{listItems}</ul>;
}

export default BookList;
