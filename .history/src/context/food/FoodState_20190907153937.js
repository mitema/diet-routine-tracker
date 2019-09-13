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
  ADD_FOOD_ITEM
} from "../types";

const FoodState = props => {
  const initialState = {
    foods: [],
    isAddBtnClicked: false,
    foodDetails: null,
    foodItemClicked: false,
    addedFoods: [],
    selectedDayId: 0
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
    const foodItem = getFoodItem(itemID, itemType);
    console.log(foodItem);
    let foodName = foodItem[0].food_name;
    if (foodItem.nix_brand_id) {
      foodName = foodItem.nix_brand_id;
    }
    const serving_qty = foodItem[0].serving_qty;
    const serving_unit = foodName[0].serving_unit;

    const queryString = `${serving_qty} ${serving_unit} ${foodName}`;
    const headerConfig = getHeaderConfig();

    const body = {
      query: queryString
    };
    const res = await axios.post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      body,
      headerConfig
    );
    dispatch({
      type: SEARCH_NUTRIENTS,
      payload: res.data
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
  const getFoodItem = (itemID, type) => {
    const foodArray = state.foods[type];
    const foodItem = foodArray.filter((item, index) => {
      return index === itemID;
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
        selectedDayId: state.selectedDayId
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
