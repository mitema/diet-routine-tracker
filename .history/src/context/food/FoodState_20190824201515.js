import React, { useReducer } from "react";
import axios from "axios";
import FoodContext from "./foodContext";
import FoodReducer from "./foodReducer";
import { SEARCH_FOOD, SET_LOADING } from "../types";

const FoodState = props => {
  const initialState = {
    foods: []
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  //Search Food
  const searchFood = async text => {
    setLoading();
    const config = {
      headers: {
        "x-app-id": "4d1bb501",
        "x-app-key": "8bc3d5bb151112034268ba72277aa161"
      }
    };
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${text}`,
      config
    );
    dispatch({
      type: SEARCH_FOOD,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <FoodContext.Provider
      value={{
        foods: state.foods,
        searchFood: state.searchFood
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
