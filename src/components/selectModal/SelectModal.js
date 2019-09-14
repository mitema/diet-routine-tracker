import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../context/food/foodContext";
import SearchBox from "../layout/searchBox/SearchBox";
import "./SelectModal.css";

const SelectModal = () => {
  const [clickedItemId, setItemClicked] = useState(null);
  const [brandId, setBrandId] = useState(null);
  const foodContext = useContext(FoodContext);
  const itemType = { common: "common", branded: "branded" };
  const { foods } = foodContext;

  const handleOnClick = (brandId, foodName) => {
    setItemClicked(foodName);
    setBrandId(brandId);
  };

  useEffect(() => {
    if (clickedItemId) {
      // Split the string to get the foodId and type of food

      const targetItems = clickedItemId;
      //const brandId = itemClassNames.split(" ")[0];
      const targetItemType =
        Number(brandId.toString()) === 0 ? itemType.common : itemType.branded;
      const targetItemId = targetItems;

      setItemClicked(null);
      foodContext.searchNutrients(targetItemId, targetItemType);
      foodContext.setFoodItemClicked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <li
                onClick={e => handleOnClick(brandId, item.food_name)}
                className="collection-item avatar select-collection-item"
                key={item.food_name}
              >
                <a
                  href="#details-modal"
                  className="modal-trigger details-modal-trigger-link"
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
                      <span className="title select-food-title">
                        {item.food_name}
                        <div className="item-brand-name">{item.brand_name}</div>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
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
              <li key="0">
                <div className="list-header-common">
                  <b>COMMON</b>
                </div>
              </li>
              {getFoodDetails(foods.common, 0)}
              <li key="1" className="select-list-item-title">
                <div className="list-header-branded">
                  <b>BRANDED</b>
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
