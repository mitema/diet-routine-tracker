import React from "react";
import "./FoodItem";

const FoodItem = props => {
  const {
    foodName,
    foodGrams,
    foodCalories,
    icon,
    servingUnit,
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
      <a href="#!" className="modal-trigger" style={linkStyle}>
        <i className="material-icons circle icon-circle" style={iconStyle}>
          <img src={icon} alt="food-icon" style={imgStyle} />
        </i>
        <div className="diet-item-container">
          <div className="diet-title-section">
            <div>
              <b>{foodName}</b>
            </div>
            <div className="diet-servings-size-text">
              {servingsSize} {servingUnit} ({foodGrams} g)
            </div>
          </div>
          <div className="diet-details-section">
            <div>
              <b>{Math.round(foodCalories)} cal</b>
            </div>
            <div className="meal-type-section">{mealType}</div>
          </div>
        </div>
      </a>
    </li>
  );
};

const imgStyle = {
  borderRadius: "5px",
  width: "40px",
  height: "40px"
};
const linkStyle = {
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid #e0e0e0",
  color: "black"
};
const iconStyle = { borderRaduis: "5px !important" };

export default FoodItem;
