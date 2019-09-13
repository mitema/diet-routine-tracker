import React from "react";
import "./FoodItem";

const FoodItem = () => {
  return (
    <li
      class="collection-item avatar"
      style={{
        borderBottom: "none",
        minHeight: "0px",
        lineHeight: "4rem"
      }}
    >
      <a
        href="#details-modal"
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
            src={""}
            alt="food-icon"
            style={{
              borderRadius: "5px",
              width: "40px",
              height: "40px"
            }}
          />
        </i>
        <span className="title">test</span>
      </a>
    </li>
  );
};

export default FoodItem;
