import {
  SEARCH_FOOD,
  SET_LOADING,
  ADD_BTN_CLICKED,
  SHOW_FOOD_DETAILS,
  SET_FOOD_ITEM_CLICKED
} from "../types";

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
    case SHOW_FOOD_DETAILS: {
      return {
        ...state,
        foodItem: action.payload
      };
    }
    case SET_FOOD_ITEM_CLICKED: {
      return {
        ...state,
        foodItemClicked: true
      };
    }
    default: {
      return state;
    }
  }
};
