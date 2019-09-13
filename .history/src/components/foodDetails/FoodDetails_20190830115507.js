import React from "react";
import "./FoodDetails.css";

const FoodDetails = () => {
  return (
    <div className="food-details-container">
      <div
        id="details-modal"
        className="modal"
        style={{
          width: "95%",
          marginTop: "10px",
          height: "100%",
          backgroundColor: "transparent"
        }}
      ></div>
    </div>
  );
};

export default FoodDetails;
