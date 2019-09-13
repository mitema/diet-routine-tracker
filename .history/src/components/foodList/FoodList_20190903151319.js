import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, isLoading } = foodContext;
  //console.log(addedFoods);

  const displayFoodItems = () => {
    const items = addedFoods.map((item, index) => {
      console.log(index);
      return <FoodItem key={index} />;
    });
    return items;
  };

  if (isLoading || addedFoods === null) {
    return <></>;
  }
  return (
    <>
      <ul className="food-list-container">{displayFoodItems()}</ul>
    </>
  );
};

export default FoodList;
