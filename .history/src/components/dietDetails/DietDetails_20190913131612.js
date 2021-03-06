import React, { useContext, useEffect, useState } from "react";
import "./DietDetails.css";
import FoodContext from "../../context/food/foodContext";
import DietData from "../../assets/dietData.json";

const DietDetails = props => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, selectedDayId } = foodContext;
  const [newFoodList, setNewFoodList] = useState([]);

  useEffect(() => {
    if (selectedDayId > 0 && selectedDayId <= 2) {
      setNewFoodList(DietData.data_points[selectedDayId].intake_list);
    } else {
      setNewFoodList(addedFoods);
    }
  }, [addedFoods, selectedDayId]);
  const mealTypes = {
    breakfast: "breakfast",
    lunch: "lunch",
    dinner: "dinner",
    snack: "snack"
  };

  const getConsumedCalories = () => {
    const results = getMealTypesTotal();
    const total = Object.values(results).reduce(
      (sum, currentValue) => sum + currentValue
    );
    return Math.round(total);
  };

  const getDailyGoalCalories = () => {
    const diet_goal = 1500;
    return diet_goal;
  };
  const getWidth = () => {
    return Math.round((getConsumedCalories() / getDailyGoalCalories()) * 100);
  };

  const getMealTypesTotal = () => {
    const results = {
      breakfast: 0,
      lunch: 0,
      snack: 0,
      dinner: 0
    };
    newFoodList.forEach((item, index) => {
      if (mealTypes.breakfast === item.meal_type.toLowerCase()) {
        results.breakfast += item.nf_calories;
      } else if (mealTypes.snack === item.meal_type.toLowerCase()) {
        results.snack += item.nf_calories;
      } else if (mealTypes.lunch === item.meal_type.toLowerCase()) {
        results.lunch += item.nf_calories;
      } else if (mealTypes.dinner === item.meal_type.toLowerCase()) {
        results.dinner += item.nf_calories;
      }
    });
    return results;
  };
  const determinateStyle = {
    width: `${getWidth()}%`,
    backgroundColor: "#6200ee"
  };
  if (addedFoods.length < 0) return <></>;
  return (
    <>
      <div className="diet-goal-container">
        <div className="diet-consumed-container">
          <h5>{`${getConsumedCalories()} cal`}</h5>
          <div className="consumed-text">consumed</div>
        </div>
        <div className="goal-container">
          <h5>{`${getDailyGoalCalories()} cal`}</h5>
          <div className="daily-goal-text">daily goal</div>
        </div>
      </div>
      <div className="progress" style={progressStyle}>
        <div className="determinate" style={determinateStyle}></div>
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
          <h6>{Math.round(getMealTypesTotal().breakfast)}</h6>
          <div className="meal-type-text">Breakfast</div>
        </div>
        <div className="diet-type">
          <h6>{Math.round(getMealTypesTotal().lunch)} </h6>
          <div className="meal-type-text">Lunch</div>
        </div>
        <div className="diet-type">
          <h6>{Math.round(getMealTypesTotal().dinner)} </h6>
          <div className="meal-type-text">Dinner</div>
        </div>
        <div className="diet-type">
          <h6>{Math.round(getMealTypesTotal().snack)} </h6>
          <div className="meal-type-text">Snack</div>
        </div>
      </div>
    </>
  );
};

const progressStyle = {
  display: "flex",
  backgroundColor: "#E6E6FA",
  marginLeft: "1.5rem",
  marginRight: "3rem",
  marginBottom: "0rem",
  width: "90%",
  marginTop: "1rem"
};

export default DietDetails;
