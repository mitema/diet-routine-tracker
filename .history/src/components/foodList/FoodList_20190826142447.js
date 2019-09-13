import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods } = foodContext;

  addedFoods.map();
};
