import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";

const SelectModal = () => {
  const [clickedItemId, setItemClicked] = useState(null);
  const foodContext = useContext(FoodContext);
  const itemType = { common: "common", branded: "branded" };

  const { foods } = foodContext;

  const handleOnClick = e => {
    setItemClicked(e.target.id);
  };

  useEffect(() => {
    if (clickedItemId) {
      // Split the string to get the foodId and type of food
      const targetItems = clickedItemId.split("-");
      const targetItemType =
        Number(targetItems[1].toString()) === 0
          ? itemType.common
          : itemType.branded;
      const targetItemId = Number(targetItems[0]);
      setItemClicked(null);
      foodContext.searchNutrients(targetItemId, targetItemType);
      foodContext.setFoodItemClicked();
    }
  }, [clickedItemId, foodContext, itemType]);

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
                  className="collection-item avatar select-collection-item"
                  onClick={handleOnClick}
                  key={`${index}`}
                >
                  <a
                    href="#details-modal"
                    className="modal-trigger details-modal-trigger-link"
                    id={`${index}-${brandId}`}
                  >
                    <div className="select-item-content-container">
                      <i className="material-icons circle icon-circle select-food-icon">
                        <img
                          src={item.photo.thumb}
                          alt="food-icon"
                          className="select-food-img"
                        />
                      </i>

                      <div>
                        <span
                          id={`${index}-${brandId}`}
                          className="title select-food-title"
                        >
                          {item.food_name}
                          <div id={`${index}-${brandId}`}>
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
    <div>
      <div id="select-food-modal" className="modal select-modal">
        <SearchBox
          modalMarginBottom={"5px"}
          modalWidth={"100%"}
          modalMarginTop={"0px"}
          classNameType="new-search-bar"
          backgroundColor="white"
        />
        <div className="modal-content select-modal-content">
          <div className="row">
            <ul className="collection select-modal-collection">
              <li key="00">
                <div className="list-header-common">
                  <b>COMMON</b>
                </div>
              </li>
              {getFoodDetails(foods.common)}
              <li key="01" className="select-list-item-title">
                <div className="list-header-branded">
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
