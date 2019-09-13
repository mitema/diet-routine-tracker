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
          borderBottom: "1px solid #e0e0e0",
          color: "black"
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
              marginRight: "auto"
            }}
          >
            <div>{foodName}</div>
            <div style={{ color: "#787878" }}>
              {servingsSize} {servingUnit} ({foodGrams} g)
            </div>
          </div>
          <div
            className="diet-details-section"
            style={{
              textAlign: "center"
            }}
          >
            <div>{Math.round(foodCalories)} cal</div>
            <div style={{ color: "#787878" }}>{mealType}</div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FoodItem;
