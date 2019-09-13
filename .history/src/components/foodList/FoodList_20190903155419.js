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

  /*if (addedFoods === null) {
    return <></>;
  }*/
  return (
    <>
      <ul className="food-list-container">{displayFoodItems()}</ul>
    </>
  );
};

export default FoodList;
