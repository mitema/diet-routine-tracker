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
        const brandId = item.nix_brand_id ? item.nix_brand_id : 0;
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
