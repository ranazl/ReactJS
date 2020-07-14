import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from "../constants/action-types";

const initialState = {
    id: 0,
    items: [],
    selectedItem : [],
  };

function rootReducer(state = initialState,action){
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
          selectedItem:[]
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          selectedItem: action.payload,
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          items: [],
          selectedItem: []
        };
             default:
            return state;
    };
};

export default rootReducer;

