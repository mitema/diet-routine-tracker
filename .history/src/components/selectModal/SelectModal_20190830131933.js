import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";

const SelectModal = () => {
  const [itemClicked, setItemClicked] = useState(false);
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;
  let clickedItemId = null;
  const handleOnClick = e => {
    console.log(e.target.id);
    clickedItemId = e.target.id;
    setItemClicked(true);
  };
  useEffect(() => {
    if (itemClicked) {
      foodContext.showDetails(clickedItemId);
    }
  });

  console.log(foods);

  const getCommonItems = () => {
    const food_items_length = Object.keys(foods).length;
    let items = null;
    if (food_items_length > 0) {
      items = foods.common.map((item, index) => {
        if (index <= 4) {
          console.log(index);
          return (
            <>
              <li
                id={index}
                class="collection-item avatar"
                style={{
                  borderBottom: "none",
                  minHeight: "0px",
                  lineHeight: "4rem"
                }}
                onClick={handleOnClick}
              >
                <div
                  id={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #e0e0e0"
                  }}
                >
                  <i
                    class="material-icons circle icon-circle"
                    style={{ borderRaduis: "5px !important" }}
                  >
                    <img
                      src={item.photo.thumb}
                      alt="food-icon"
                      style={{
                        borderRadius: "5px",
                        width: "40px",
                        height: "40px"
                      }}
                    />
                  </i>
                  <span id={index} class="title">
                    {item.food_name}
                  </span>
                </div>
              </li>
            </>
          );
        }
      });
    }
    return items;
  };

  return (
    <div>
      <div
        id="select-food-modal"
        className="modal select-modal"
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
            <ul className="collection" style={{ border: "none" }}>
              <li key="00">
                <h6>Common</h6>
              </li>
              {getCommonItems()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
