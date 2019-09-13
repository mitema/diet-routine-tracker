import {
  SEARCH_FOOD,
  SET_LOADING,
  ADD_BTN_CLICKED,
  SHOW_FOOD_DETAILS,
  SET_FOOD_ITEM_CLICKED,
  SEARCH_NUTRIENTS,
  ADD_FOOD_ITEM,
  SET_SELECTED_DAY_ID,
  SET_INTAKE_DETAILS
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
    case SEARCH_NUTRIENTS: {
      return {
        ...state,
        nutrientInfo: action.payload
      };
    }
    case ADD_FOOD_ITEM: {
      return {
        ...state,
        addedFoods: [...state.addedFoods, action.payload],
        loading: false
      };
    }
    case SET_SELECTED_DAY_ID: {
      return {
        ...state,
        selectedDayId: action.payload
      };
    }
    case SET_INTAKE_DETAILS: {
      return {
        ...state,
        intakeDetails: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
