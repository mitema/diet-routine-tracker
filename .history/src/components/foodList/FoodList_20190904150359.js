import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";
import "./FoodList.css";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, isLoading } = foodContext;
  const mealTypes = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack"
  };

  const displayFoodItems = () => {
    const items = addedFoods.map((item, index) => {
      return (
        <FoodItem
          foodName={item.foodName}
          foodGrams={item.foodGrams}
          foodCalories={item.foodCalories}
          icon={item.icon}
          servingUnit={item.servingUnit}
          servingsQty={item.servingsQty}
          servingsSize={item.servingsSize}
          mealType={item.mealType}
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

  const getMealTypesTotal = () => {
    const results = {};
    addedFoods.forEach((item, index) => {
      if (mealTypes.breakfast === item.mealType) {
        results.breakfast += item.calories;
      } else if (mealTypes.snack === item.mealType) {
        results.snack += item.calories;
      } else if (mealTypes.lunch === item.mealType) {
        results.lunch += item.calories;
      } else if (mealTypes.dinner === item.mealType) {
        results.dinner += item.calories;
      }
    });
    return results;
  };

  const getWidth = () => {
    console.log(getConsumedCalories() / getDailyGoalCalories());
    return Math.floor((getConsumedCalories() / getDailyGoalCalories()) * 100);
  };
  return (
    <>
      <ul className="collection food-list-container" style={{ border: "none" }}>
        <li className="diet-details-container">
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
          <div
            className="progress"
            style={{
              display: "flex",
              backgroundColor: "#E6E6FA",
              marginLeft: "1.5rem",
              marginRight: "3rem",
              marginBottom: "0rem",
              width: "90%",
              marginTop: "1rem"
            }}
          >
            <div
              className="determinate"
              style={{ width: `${getWidth()}%`, backgroundColor: "#6200ee" }}
            ></div>
          </div>
          <div
            style={{
              textAlign: "center"
            }}
          >
            {`${getWidth()}%`}
          </div>
          <div className="diet-types-container">
            <div className="diet-type">
              <h6>{getMealTypesTotal().breakfast.toString()}</h6>
              <div>Breakfast</div>
            </div>
            <div className="diet-type">
              <h6>{getDailyGoalCalories()} </h6>
              <div>Lunch</div>
            </div>
            <div className="diet-type">
              <h6>{getDailyGoalCalories()} </h6>
              <div>Dinner</div>
            </div>
            <div className="diet-type">
              <h6>{getDailyGoalCalories()} </h6>
              <div>Snack</div>
            </div>
          </div>
        </li>
        {displayFoodItems()}
      </ul>
    </>
  );
};

export default FoodList;
