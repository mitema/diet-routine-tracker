import React from "react";
import "./FoodItem";

const FoodItem = props => {
  const {
    foodName,
    foodGrams,
    foodCalories,
    icon,
    servingUnit,
    servingsQty,
    servingsSize,
    mealType
  } = props;
  console.log(foodName);
  return (
    <li
      className="collection-item avatar"
      style={{
        borderBottom: "none",
        minHeight: "0px",
        lineHeight: "2rem"
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
        <div
          className="diet-item-container"
          style={{ display: "flex", width: "100%" }}
        >
          <div
            className="diet-title-section"
            style={{
              textAlign: "center",
              marginRight: "auto"
            }}
          >
            <div>{foodName}</div>
            <div>
              {servingsSize} {servingUnit} ({foodGrams} g)
            </div>
          </div>
          <div
            className="diet-details-section"
            style={{
              textAlign: "center"
            }}
          >
            <div>{foodCalories} cal</div>
            <div>{mealType}</div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FoodItem;
