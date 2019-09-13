import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  //const { addedFoods } = foodContext;
  const addedFoods = [1];
  /*const displayFoodItems = () => {
    addedFoods.map((item, index) => {
      <FoodItem />;
    });
    return displayFoodItems;
  };*/

  return (
    <>
      <ul className="food-list-container">
        {addedFoods.map(item => {
          return <FoodItem />;
        })}
      </ul>
    </>
  );
};

export default FoodList;
