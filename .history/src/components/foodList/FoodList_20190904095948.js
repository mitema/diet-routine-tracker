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
    return 1289;
  };

  const getDailyGoalCalories = () => {
    return 1500;
  };

  const getWidth = () => {
    console.log(getConsumedCalories / getDailyGoalCalories);
    return Math.floor((getConsumedCalories / getDailyGoalCalories) * 100);
  };
  return (
    <>
      <ul className="food-list-container">
        <li>
          <div className="diet-goal-container">
            <div className="diet-consumed-container">
              <h5>{`${getConsumedCalories()} cal`}</h5>
              <div>consumed</div>
            </div>
            <div className="goal-container">
              <h5>{`${getDailyGoalCalories()} cal`}</h5>
              <div>daily goal</div>
            </div>
          </div>
          <div class="progress">
            <div class="determinate" style={{ width: `${getWidth()}%` }}></div>
          </div>
        </li>
        {displayFoodItems()}
      </ul>
    </>
  );
};

export default FoodList;
