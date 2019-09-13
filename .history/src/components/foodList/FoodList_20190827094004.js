import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";

const FoodList = () => {
  const foodContext = useContext(FoodContext);

  //addedFoods.map();
  return <div className="food-list-container">foodlist</div>;
};

export default FoodList;
