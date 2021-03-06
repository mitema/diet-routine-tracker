import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;
  //console.log(addedFoods);

  const displayFoodItems = () => {
    const items = foods.map((item, index) => {
      console.log(index);
      return <FoodItem key={index} />;
    });
    return items;
  };

  return (
    <>
      <ul className="food-list-container">{displayFoodItems()}</ul>
    </>
  );
};

export default FoodList;
