import React, { useReducer } from "react";
import axiois from "axios";
import FoodContext from "./foodContext";
import FoodReducer from "./foodReducer";
import { SEARCH_FOOD } from "../types";

const FoodState = props => {
  const initialState = {
    foods: []
  };

  const [state, dispatch] = useReducer(FoodReducer, initialState);

  //Search Users

  return (
    <FoodContext.Provider
      value={{
        foods: state.foods
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodState;
