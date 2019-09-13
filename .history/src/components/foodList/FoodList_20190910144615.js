import React, { useContext, useEffect } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";
import "./FoodList.css";
import DietData from "../../assets/dietData.json";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const { addedFoods, selectedDayId, resetFoodDetails, foods } = foodContext;

  useEffect(() => {
    if (selectedDayId > 0 && selectedDayId <= 2) {
      resetFoodDetails(DietData.data_points[selectedDayId].intake_list);
    }
  }, [selectedDayId, resetFoodDetails, addedFoods]);

  const displayFoodItems = () => {
    const items = foods.map((item, index) => {
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

  if (foods === null) {
    return <></>;
  }
  return <>{displayFoodItems()}</>;
};

export default FoodList;
