import { ADD_ARTICLE } from "../constants/action-types";

const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
};

export const getData = () => {
  return (dispatch) => {
    try {
      fetch("http://yourApi.com")
        .then((result) => {
          dispatch(addArticle(result));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };