import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
};

export function rootReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export const getArticle = state => state.articles;

