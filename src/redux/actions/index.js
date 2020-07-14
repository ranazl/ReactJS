import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };

  export const fetchProducts = (Id) => {
    return dispatch => {
      let dataTask = `https://www.googleapis.com/books/v1/volumes?q=book/items/?tId=${Id}`;
      dispatch(fetchProductsBegin());
      fetch(dataTask, { method: "GET" })
        .then(response => response.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  };
  
  const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  const fetchProductsSuccess = products => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    };
  };
  
  const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });