import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";

const SelectModal = () => {
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;
  console.log(foods);

  const getItems = () => {
    let food_items_length = Object.keys(foods).length;
    console.log(food_items_length);
    if (food_items_length > 0) {
      return foods.common.map((item, index) => {
        if (index <= 4) {
          return (
            <>
              <li
                class="collection-item avatar"
                style={{ borderBottom: "none" }}
                key={index}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #e0e0e0"
                  }}
                >
                  <img src={item.photo.thumb} />
                  <a style={{ paddingBottom: "10px", color: "black" }}>
                    <span class="title">{item.food_name}</span>
                  </a>
                </div>
              </li>
            </>
          );
        }
      });
    }
  };
  return (
    <div>
      <div
        id="select-food-modal"
        className="modal"
        style={{
          width: "95%",
          marginTop: "10px",
          height: "100%",
          backgroundColor: "transparent"
        }}
      >
        <SearchBox
          modalMarginBottom={"5px"}
          modalWidth={"100%"}
          modalMarginTop={"0px"}
        />
        <div
          className="modal-content"
          style={{ padding: "0px", backgroundColor: "white", height: "100%" }}
        >
          <div className="row">
            <ul class="collection" style={{ border: "none" }}>
              {getItems()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
