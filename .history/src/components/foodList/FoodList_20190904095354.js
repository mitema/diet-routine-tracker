import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";
import "./FoodList.css";

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
  const getConsumedCalories = () => {
    return `1289 cal`;
  };

  const getDailyGoalCalories = () => {
    return `1500 cal`;
  };
  return (
    <>
      <ul className="food-list-container">
        <li>
          <div className="diet-goal-container">
            <div className="diet-consumed-container">
              <h5>{getConsumedCalories()}</h5>
              <div>consumed</div>
            </div>
            <div className="goal-container">
              <h5>{getDailyGoalCalories()}</h5>
              <div>daily goal</div>
            </div>
          </div>
          <div class="progress">
            <div class="determinate" style={{ width: "70%" }}></div>
          </div>
        </li>
        {displayFoodItems()}
      </ul>
    </>
  );
};

export default FoodList;
