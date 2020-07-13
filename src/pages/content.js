import React, { useEffect } from "react";
import { connect } from "react-redux";
import PartOne from "../components/partOne";
import BookList from "../components/bookList";
import { getData } from "../redux/actions";

const books = ["rter", "rtert", "ryutyu", "rqwr", "rurj"];

function Content(props) {
  const { getDataAction } = props;
  useEffect(() => {
    getDataAction();
  }, []);
  return (
    <div className="App">
      <PartOne />
      <BookList books={books} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  root: state.rootReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDataAction: (resolve, reject) => {
      dispatch(getData(resolve, reject));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
