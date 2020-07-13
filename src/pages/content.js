import React from "react";
import PartOne from "../components/partOne";
import BookList from "../components/bookList";

const books = ["rter", "rtert", "ryutyu", "rqwr", "rurj"];

function Content() {
  return (
    <div className="App">
      <PartOne />
      <BookList books={books} />
    </div>
  );
}

export default Content;
