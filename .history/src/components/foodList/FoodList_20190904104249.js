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
    console.log(getConsumedCalories() / getDailyGoalCalories());
    return Math.floor((getConsumedCalories() / getDailyGoalCalories()) * 100);
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
          <div
            className="progress"
            style={{
              display: "flex",
              backgroundColor: "#E6E6FA",
              marginLeft: "1.5rem",
              marginRight: "3rem",
              width: "90%"
            }}
          >
            <div
              className="determinate"
              style={{ width: `${getWidth()}%`, backgroundColor: "#6200ee" }}
            ></div>
            <div style={{ diplay: "flex", justifyContent: "center" }}>
              {`${getWidth()}%`}
            </div>
          </div>
          <div className="diet-types-container">
            <div>
              <h5>{getDailyGoalCalories()}</h5>
              <div>daily</div>
            </div>
            <div>
              <h5>{getDailyGoalCalories()} </h5>
              <div>daily</div>
            </div>
            <div>
              <h5>{getDailyGoalCalories()} </h5>
              <div>daily</div>
            </div>
            <div>
              <h5>{getDailyGoalCalories()} </h5>
              <div>daily</div>
            </div>
          </div>
        </li>
        {displayFoodItems()}
      </ul>
    </>
  );
};

export default FoodList;
