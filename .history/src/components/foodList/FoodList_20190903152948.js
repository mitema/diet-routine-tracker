import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, isLoading } = foodContext;
  const {foodName, foodGrams, foodCalories, icon, servingUnit, servingsQty }

  const displayFoodItems = () => {
    const items = addedFoods.map((item, index) => {
      return <FoodItem foodName={addedFoods.foodName} key={index} />;
    });
    return items;
  };

  if (addedFoods === null) {
    return <></>;
  }
  return (
    <>
      <ul className="food-list-container">{displayFoodItems()}</ul>
    </>
  );
};

export default FoodList;
