import { SEARCH_FOOD, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_FOOD: {
      return {
        ...state,
        foods: action.payload
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
};
