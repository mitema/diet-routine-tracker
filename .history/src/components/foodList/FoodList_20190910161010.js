import React, { useContext, useState, useEffect } from "react";
import FoodContext from "../../context/food/foodContext";
import FoodItem from "./FoodItem/FoodItem";
import "./FoodList.css";
import DietData from "../../assets/dietData.json";

const FoodList = () => {
  const foodContext = useContext(FoodContext);
  const [newFoodList, setNewFoodList] = useState([]);
  const {
    addedFoods,
    selectedDayId,
    setSelectedDayId,
    resetFoodDetails,
    foods
  } = foodContext;

  useEffect(() => {
    if (selectedDayId > 0 && selectedDayId <= 2) {
      setNewFoodList(DietData.data_points[selectedDayId].intake_list);
    } else {
      setNewFoodList(addedFoods);
    }
  }, [setNewFoodList, addedFoods, selectedDayId]);

  const displayFoodItems = () => {
    /*let foodList = [];
    if (selectedDayId > 0 && selectedDayId <= 2) {
      foodList = newFoodList;
      console.log(foodList);
    } else {
      console.log("here");
      foodList = foods;
    }*/
    if (newFoodList) {
    }
    const items = newFoodList.map((item, index) => {
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
