import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";
import M from "materialize-css/dist/js/materialize.min.js";

const SelectModal = () => {
  const [clickedItemId, setItemClicked] = useState(null);
  const foodContext = useContext(FoodContext);
  const ele = React.createRef();
  const instance = M.Modal.getInstance(ele.current);
  console.log(instance);
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

  const getFoodDetails = obj => {
    let items = null;
    if (obj) {
      const food_items_length = Object.keys(obj).length;
      if (food_items_length > 0) {
        items = obj.map((item, index) => {
          let brandId = 0;
          if (item.nix_brand_id) {
            brandId = item.nix_brand_id;
          }
          if (index <= 4) {
            return (
              <>
                <li
                  id={`${index}-${brandId}`}
                  className="collection-item avatar"
                  style={{
                    borderBottom: "none",
                    minHeight: "0px"
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "10px"
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

                      <div>
                        <span id={`${index}-${brandId}`} className="title">
                          {item.food_name}
                          <div
                            id={`${index}-${brandId}`}
                            style={{ color: "#787878", fontSize: "14px" }}
                          >
                            {item.brand_name}
                          </div>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </>
            );
          }
        });
      }
    }
    return items;
  };

  return (
    <div ref={ele}>
      <div
        id="select-food-modal"
        className="modal select-modal"
        style={{
          width: "95%",
          marginTop: "1rem",
          height: "100%",
          backgroundColor: "transparent"
        }}
      >
        <SearchBox
          modalMarginBottom={"5px"}
          modalWidth={"100%"}
          modalMarginTop={"0px"}
          classNameType="new-search-bar"
          backgroundColor="white"
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
              {getFoodDetails(foods.common)}
              <li key="01" style={{ backgroundColor: "white" }}>
                <div
                  className="list-header"
                  style={{ color: "gray", backgroundColor: "white" }}
                >
                  <b>BRANDED</b>
                </div>
              </li>
              {getFoodDetails(foods.branded)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
