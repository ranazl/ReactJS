
const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
};

export const getData = () => {
  return (dispatch) => {
    try {
      fetch("https://www.googleapis.com/books/v1/volumes?q=book")
        .then((result) => {
          dispatch(addArticle(result));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  };