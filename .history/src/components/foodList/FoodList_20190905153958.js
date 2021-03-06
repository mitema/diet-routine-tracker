import React, { useContext, useState, useEffect } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";
import "./FoodList.css";
import DietData from "../../assets/dietData.json";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, isLoading, selectedDayId } = foodContext;

  console.log(selectedDayId);
  let food_data = [];
  if (selectedDayId > 0 && selectedDayId <= 2) {
    food_data = DietData.data_points[selectedDayId].intake_list;
  } else {
    food_data = addedFoods;
  }

  /*useEffect(()=>{
    setConsumedCalories(getConsumedCalories())
  }, setConsumedCalories)*/

  //console.log(DietData);
  const mealTypes = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack"
  };

  const displayFoodItems = () => {
    const items = food_data.map((item, index) => {
      return (
        <FoodItem
          foodName={item.food_name}
          foodGrams={item.serving_weight_grams}
          foodCalories={item.nf_calories}
          icon={item.thumb}
          servingUnit={item.serving_unit}
          servingsQty={item.servings_qty}
          servingsSize={item.serving_size}
          mealType={item.meal_type}
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
    const results = getMealTypesTotal();
    const total = Object.values(results).reduce(
      (sum, currentValue) => sum + currentValue
    );
    return total;
  };

  const getDailyGoalCalories = () => {
    const diet_goal = 1500;
    return diet_goal;
  };

  const getMealTypesTotal = () => {
    const results = {
      breakfast: 0,
      lunch: 0,
      snack: 0,
      dinner: 0
    };
    food_data.forEach((item, index) => {
      if (mealTypes.breakfast === item.meal_type) {
        results.breakfast += item.serving_weight_grams;
      } else if (mealTypes.snack === item.meal_type) {
        results.snack += item.serving_weight_grams;
      } else if (mealTypes.lunch === item.meal_type) {
        results.lunch += item.serving_weight_grams;
      } else if (mealTypes.dinner === item.meal_type) {
        results.dinner += item.serving_weight_grams;
      }
    });
    console.log(results);
    return results;
  };

  const getWidth = () => {
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
              <h6>{getMealTypesTotal().breakfast}</h6>
              <div>Breakfast</div>
            </div>
            <div className="diet-type">
              <h6>{getMealTypesTotal().lunch} </h6>
              <div>Lunch</div>
            </div>
            <div className="diet-type">
              <h6>{getMealTypesTotal().dinner} </h6>
              <div>Dinner</div>
            </div>
            <div className="diet-type">
              <h6>{getMealTypesTotal().snack} </h6>
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
