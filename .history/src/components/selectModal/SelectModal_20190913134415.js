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

  const getFoodDetails = (obj, baseKey) => {
    let items = null;
    if (obj) {
      const food_items_length = Object.keys(obj).length;
      if (food_items_length > 0) {
        // eslint-disable-next-line array-callback-return
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
                  key={index + 2}
                >
                  <a
                    href="#details-modal"
                    className="modal-trigger details-modal-trigger-link"
                    id={`${index}-${brandId}`}
                    key={`${index}-${brandId}-${baseKey}`}
                  >
                    <div
                      key={`${index}-${brandId}-${baseKey}`}
                      className="select-item-content-container"
                    >
                      <i
                        key={`${index}-${brandId}-${baseKey}`}
                        className="material-icons circle icon-circle select-food-icon"
                      >
                        <img
                          src={item.photo.thumb}
                          alt="food-icon"
                          className="select-food-img"
                          key={`${index}-${brandId}-${baseKey}`}
                        />
                      </i>

                      <div key={`${index}-${brandId}-${baseKey}`}>
                        <span
                          id={`${index}-${brandId}`}
                          className="title select-food-title"
                          key={`${index}-${brandId}-${baseKey}`}
                        >
                          {item.food_name}
                          <div
                            id={`${index}-${brandId}`}
                            key={`${index}-${brandId}-${baseKey}`}
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
              <li key={0}>
                <div key={0 - 1} className="list-header-common">
                  <b key={0 - 2}>COMMON</b>
                </div>
              </li>
              {getFoodDetails(foods.common, 0)}
              <li key={1} className="select-list-item-title">
                <div key={1 - 0} className="list-header-branded">
                  <b key={1 - 1}>BRANDED</b>
                </div>
              </li>
              {getFoodDetails(foods.branded, 1)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
