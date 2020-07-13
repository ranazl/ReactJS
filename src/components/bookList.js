import React from "react";
import { ReactDOM } from "react-dom";

function BookList(props) {
  const { books } = props;
  const listItems = books.map((book) => <li>{book}</li>);
  return <ul>{listItems}</ul>;
}

export default BookList;
