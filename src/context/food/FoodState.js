import React, { useReducer } from "react";
import axios from "axios";
import FoodContext from "./foodContext";
import FoodReducer from "./foodReducer";
import {
  SEARCH_FOOD,
  SET_LOADING,
  ADD_BTN_CLICKED,
  SET_FOOD_ITEM_CLICKED,
  SEARCH_NUTRIENTS,
  SET_SELECTED_DAY_ID,
  ADD_FOOD_ITEM,
  SET_INTAKE_DETAILS,
  RESET_FOOD_LIST
} from "../types";

const FoodState = props => {
  const initialState = {
    foods: [],
    newFoodList: [],
    isAddBtnClicked: false,
    foodDetails: null,
    foodItemClicked: false,
    addedFoods: [],
    selectedDayId: 0,
    intakeDetails: {}
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

  const searchNutrients = async (itemID, itemType) => {
    setLoading();
    let res = null;
    let body = null;
    const headerConfig = getHeaderConfig();
    const foodItem = getFoodItem(itemID, itemType);
    if (!foodItem[0].nix_brand_id) {
      let foodName = foodItem[0].food_name;
      const serving_qty = foodItem[0].serving_qty;
      const serving_unit = foodItem[0].serving_unit;

      const queryString = `${serving_qty} ${serving_unit} ${foodName}`;
      body = {
        query: queryString
      };
      res = await axios.post(
        "https://trackapi.nutritionix.com/v2/natural/nutrients",
        body,
        headerConfig
      );
    } else {
      const brandId = foodItem[0].nix_item_id;
      res = await axios.get(
        `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${brandId}`,
        headerConfig
      );
    }

    dispatch({
      type: SEARCH_NUTRIENTS,
      payload: res.data.foods
    });
  };

  const addFoodItem = food => {
    dispatch({
      type: ADD_FOOD_ITEM,
      payload: food
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

  const resetFoodDetails = items => {
    dispatch({
      type: RESET_FOOD_LIST,
      payload: items
    });
  };

  const getFoodItem = (itemID, type) => {
    const foodArray = state.foods[type];

    const foodItem = foodArray.filter((item, index) => {
      return itemID === item.food_name;
    });

    return foodItem;
  };

  const setFoodItemClicked = () => {
    dispatch({
      type: SET_FOOD_ITEM_CLICKED
    });
  };

  const setSelectedDayId = id => {
    dispatch({
      type: SET_SELECTED_DAY_ID,
      payload: id
    });
  };

  const setIntakeDetails = obj => {
    dispatch({
      type: SET_INTAKE_DETAILS,
      payload: obj
    });
  };
  return (
    <FoodContext.Provider
      value={{
        foods: state.foods,
        searchFood,
        isAddBtnClicked: state.isAddBtnClicked,
        addButtonClicked,
        foodDetails: state.foodDetails,
        setFoodItemClicked,
        foodItemClicked: state.foodItemClicked,
        searchNutrients,
        nutrientInfo: state.nutrientInfo,
        addedFoods: state.addedFoods,
        addFoodItem,
        setSelectedDayId,
        selectedDayId: state.selectedDayId,
        intakeDetails: state.setIntakeDetails,
        setIntakeDetails,
        resetFoodDetails,
        newFoodList: state.newFoodList
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
