import React from "react";
import "./FoodItem";

const FoodItem = props => {
  const {
    foodName,
    foodGrams,
    foodCalories,
    icon,
    servingUnit,
    servingsQty
  } = props;
  console.log(foodName);
  return (
    <li
      className="collection-item avatar"
      style={{
        borderBottom: "none",
        minHeight: "0px",
        lineHeight: "4rem"
      }}
    >
      <a
        className="modal-trigger"
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e0"
        }}
      >
        <i
          className="material-icons circle icon-circle"
          style={{ borderRaduis: "5px !important" }}
        >
          <img
            src={icon}
            alt="food-icon"
            style={{
              borderRadius: "5px",
              width: "40px",
              height: "40px"
            }}
          />
        </i>
        <div className="diet-item-container">
          <div className="diet-consumed-container">
            <div>{foodName}</div>
            <div>consumed</div>
          </div>
          <div className="goal-container">
            <h5>{foodName}</h5>
            <div>daily goal</div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FoodItem;
