import { SEARCH_FOOD, SET_LOADING, ADD_BTN_CLICKED } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_FOOD: {
      return {
        ...state,
        foods: action.payload,
        loading: false
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case ADD_BTN_CLICKED: {
      return {
        ...state,
        isAddBtnClicked: true
      };
    }
    default: {
      return state;
    }
  }
};
