import React, { useReducer } from "react";
import axios from "axios";
import FoodContext from "./foodContext";
import FoodReducer from "./foodReducer";
import {
  SEARCH_FOOD,
  SET_LOADING,
  ADD_BTN_CLICKED,
  SHOW_FOOD_DETAILS,
  SET_FOOD_ITEM_CLICKED,
  SEARCH_NUTRIENTS
} from "../types";

const FoodState = props => {
  const initialState = {
    foods: [],
    isAddBtnClicked: false,
    foodItem: null,
    foodItemClicked: false,
    nutrientInfo: []
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  //Search Food
  const searchFood = async text => {
    setLoading();
    const config = getHeaderConfig();
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${text}`,
      config
    );
    dispatch({
      type: SEARCH_FOOD,
      payload: res.data
    });
  };

  const searchNutrients = async () => {
    setLoading();
    console.log(state.foodItem);
    let foodName = state.foodItem.food_name;
    if (state.foodItem.nix_brand_id) {
      foodName = state.foodItem.nix_brand_id;
    }
    const headerConfig = getHeaderConfig();
    const body = JSON.stringify({ query: foodName });
    const res = await axios.post(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      body,
      headerConfig
    );
    dispatch({
      type: SEARCH_NUTRIENTS,
      payload: res.data
    });
  };

  const getHeaderConfig = () => {
    const config = {
      headers: {
        "x-app-id": "4d1bb501",
        "x-app-key": "8bc3d5bb151112034268ba72277aa161"
      }
    };
    return config;
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  const addButtonClicked = () => {
    dispatch({
      type: ADD_BTN_CLICKED
    });
  };
  const showDetails = (itemID, type) => {
    const foodArray = state.foods[type];
    const foodItem = foodArray.filter((item, index) => {
      return index === itemID;
    });

    dispatch({
      type: SHOW_FOOD_DETAILS,
      payload: foodItem
    });
  };
  const setFoodItemClicked = () => {
    dispatch({
      type: SET_FOOD_ITEM_CLICKED
    });
  };
  return (
    <FoodContext.Provider
      value={{
        foods: state.foods,
        searchFood,
        isAddBtnClicked: state.isAddBtnClicked,
        addButtonClicked,
        showDetails,
        foodItem: state.foodItem,
        setFoodItemClicked,
        foodItemClicked: state.foodItemClicked,
        searchNutrients,
        nutrientInfo: state.nutrientInfo
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
