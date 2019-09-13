import {
  SEARCH_FOOD,
  SET_LOADING,
  ADD_BTN_CLICKED,
  SHOW_FOOD_DETAILS,
  SET_FOOD_ITEM_CLICKED,
  SEARCH_NUTRIENTS
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
    case SET_FOOD_ITEM_CLICKED: {
      return {
        ...state,
        foodItemClicked: true
      };
    }
    case SEARCH_NUTRIENTS: {
      return {
        ...state,
        nutrientInfo: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
