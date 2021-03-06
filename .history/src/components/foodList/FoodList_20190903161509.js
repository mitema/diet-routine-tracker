import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, isLoading } = foodContext;

  const displayFoodItems = () => {
    const items = addedFoods.map((item, index) => {
      console.log(item);
      return (
        <FoodItem
          foodName={item.foodName}
          foodGrams={item.foodGrams}
          foodCalories={item.foodCalories}
          icon={item.icon}
          servingUnit={item.servingUnit}
          servingsQty={item.servingsQty}
          key={index}
        />
      );
    });
    return items;
  };

  if (addedFoods === null) {
    return <></>;
  }
  const getConsumedCalories = () => {};

  const getDailyGoalCalories = () => {};
  return (
    <>
      <ul className="food-list-container">
        <li>
          <div>
            {getConsumedCalories}
            <div>consumed</div>
          </div>
          <div>
            {getDailyGoalCalories}
            <div>daily goal</div>
          </div>
        </li>
        <ul>{displayFoodItems()}</ul>
      </ul>
    </>
  );
};

export default FoodList;
