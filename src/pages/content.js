import React from 'react';
import PartOne from '../components/partOne';
import BookList from '../components/bookList';

const karim = ["rter", "rtert", "ryutyu", "rqwr", "rurj"];

function Content() {
  return (
    <div className="App">
      <PartOne/>
      <BookList data={karim}/>
    </div>
  );
}

export default Content;