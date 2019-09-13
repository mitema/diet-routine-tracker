import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";

const SelectModal = () => {
  const [clickedItemId, setItemClicked] = useState(null);
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;

  const handleOnClick = e => {
    setItemClicked(e.target.id);
  };

  useEffect(() => {
    if (clickedItemId) {
      // Split the string to get the foodId and type of food
      const targetItems = clickedItemId.split("-");
      const targetItemType =
        Number(targetItems[1].toString()) === 0 ? "common" : "branded";
      const targetItemId = Number(targetItems[0]);
      setItemClicked(null);
      foodContext.searchNutrients(targetItemId, targetItemType);
      foodContext.setFoodItemClicked();
    }
  }, [clickedItemId, foodContext]);

  const getCommonItems = () => {
    const food_items_length = Object.keys(foods).length;
    let items = null;
    if (food_items_length > 0) {
      items = foods.common.map((item, index) => {
        const brandId = 0;
        if (index <= 4) {
          return (
            <>
              <li
                id={`${index}-${brandId}`}
                className="collection-item avatar"
                style={{
                  borderBottom: "none",
                  minHeight: "0px",
                  lineHeight: "4rem"
                }}
                onClick={handleOnClick}
                key={`${index}`}
              >
                <a
                  href="#details-modal"
                  className="modal-trigger"
                  id={`${index}-${brandId}`}
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
                      src={item.photo.thumb}
                      alt="food-icon"
                      style={{
                        borderRadius: "5px",
                        width: "40px",
                        height: "40px"
                      }}
                    />
                  </i>
                  <span id={`${index}-${brandId}`} className="title">
                    {item.food_name}
                  </span>
                </a>
              </li>
            </>
          );
        }
      });
    }
    return items;
  };

  const getBrandedItems = obj => {
    //console.log(obj);
    let food_items_length = 0;
    if (obj) {
      food_items_length = Object.keys().length;
    }

    let items = null;
    if (food_items_length > 0) {
      items = obj.map((item, index) => {
        const brandId = item.nix_brand_id;
        if (!item.brand_name) {
          item.brand_name = "";
        }
        if (index <= 4) {
          return (
            <>
              <li
                className="collection-item avatar"
                style={{
                  borderBottom: "none",
                  minHeight: "0px",
                  lineHeight: "2rem"
                }}
                onClick={handleOnClick}
                key={`${index}`}
              >
                <a
                  href="#details-modal"
                  className="modal-trigger"
                  id={`${index}-${brandId}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    borderBottom: "1px solid #e0e0e0"
                  }}
                >
                  <i
                    className="material-icons circle icon-circle"
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
                  <div
                    className="diet-item-container"
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: ".5rem"
                    }}
                  >
                    <div
                      className="diet-title-section"
                      style={{
                        marginRight: "auto"
                      }}
                    >
                      <div>
                        <b>{item.food_name}</b>
                      </div>
                      <div style={{ color: "#787878" }}>{item.brand_name}</div>
                    </div>
                  </div>
                </a>
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
                <div style={{ color: "gray" }} className="list-header">
                  <b>COMMON</b>
                </div>
              </li>
              {getBrandedItems(foods.common)}
              <li key="01" style={{ backgroundColor: "white" }}>
                <div
                  className="list-header"
                  style={{ color: "gray", backgroundColor: "white" }}
                >
                  <b>BRANDED</b>
                </div>
              </li>
              {getBrandedItems(foods.branded)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
