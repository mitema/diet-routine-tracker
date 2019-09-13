import React, { useContext, useState, useEffect } from "react";
import "./DetailsModal.css";
import FoodContext from "../../context/food/foodContext";
const DetailsModal = () => {
  const servingsOperationType = { up: "UP", down: "DOWN" };
  const foodContext = useContext(FoodContext);
  const [icon, setIcon] = useState("");
  const [foodName, setFoodName] = useState("");
  const [servingUnit, setServingUnit] = useState("");
  const [foodGrams, setFoodGrams] = useState("");
  const [foodCalories, setFoodCalories] = useState("");
  const [brandName, setBrandName] = useState("");
  const focusInput = React.createRef();
  const [servingsQty, setServingsQty] = useState("");
  const { foodItemClicked, nutrientInfo, addFoodItem } = foodContext;
  const [servingsSize, setServingsSize] = useState("0.0");
  const [mealType, setMealType] = useState("Breakfast");

  const handleInputOnChange = e => {
    if (e.target.value) {
      setServingsSize(e.target.value);
    } else {
      // setServingsSize("1.0");
    }
  };

  const handleMealTypeChange = e => {
    setMealType(e.target.value);
  };

  useEffect(() => {
    if (foodItemClicked) {
      if (nutrientInfo) {
        //focusInput.current.focus();
        setIcon(nutrientInfo.foods[0].photo.thumb);
        setFoodName(nutrientInfo.foods[0].food_name);
        setBrandName(nutrientInfo.foods[0].brand_name);
        setServingUnit(nutrientInfo.foods[0].serving_unit.split("(")[0]);
        setFoodGrams(
          Math.round(nutrientInfo.foods[0].serving_weight_grams) *
            Number(servingsSize)
        );
        setFoodCalories(
          Math.round(nutrientInfo.foods[0].nf_calories) * Number(servingsSize)
        );
        setServingsQty(nutrientInfo.foods[0].serving_qty);
      }
    }
  }, [
    setIcon,
    setFoodName,
    foodItemClicked,
    foodName,
    nutrientInfo,
    servingsSize
  ]);

  const handleAddFood = () => {
    const newFoodItem = {
      food_name: foodName,
      thumb: icon,
      serving_unit: servingUnit,
      serving_weight_grams: foodGrams,
      nf_calories: foodCalories,
      serving_qty: servingsQty,
      serving_size: servingsSize,
      meal_type: mealType
    };
    addFoodItem(newFoodItem);
  };

  const operationOnClick = type => {
    if (type === servingsOperationType.up) {
      setServingsSize(Number(servingsSize) + 0.5);
    } else if (type === servingsOperationType.down) {
      if (servingsSize > 0) {
        setServingsSize(servingsSize - 0.5);
      }
    }
  };

  const setValue = e => {
    return Number(servingsSize).toFixed(1);
  };

  return (
    <div>
      <div id="details-modal" className="modal details-food-modal">
        <div className="collection modal-content ">
          <ul>
            <li className="collection-item details-item">
              <div className="icon-and-text-container">
                <div className="icon-and-text-container-content">
                  <div className="icon-and-text-container-content-box">
                    <i className="material-icons circle icon-circle details-food-icon">
                      <img
                        className="details-img-icon"
                        src={icon}
                        alt="food-icon"
                      />
                    </i>
                    <h5 className="title details-food-title">{foodName}</h5>
                  </div>

                  <a href="#!" className="modal-close">
                    <i className="material-icons details-modal-close-icon">
                      close
                    </i>
                  </a>
                </div>
              </div>
            </li>
            <li className="collection-item">
              <div className="collection-item-content">
                <div className="row servings-container">
                  <div className="details-input-container">
                    <div className="input-field col s6 details-input-field">
                      <input
                        id="servings-size"
                        defaultValue={0.0}
                        value={setValue()}
                        type="text"
                        onChange={handleInputOnChange}
                      />
                      <label
                        className="active servings-unit-label"
                        htmlFor="servings-size"
                      >
                        Servings
                      </label>
                    </div>
                    <div className="operations-icon">
                      <i
                        className="material-icons up-arrow details-input-chevron"
                        onClick={() =>
                          operationOnClick(servingsOperationType.up)
                        }
                      >
                        expand_less
                      </i>

                      <i
                        className="material-icons down-arrow details-input-chevron"
                        onClick={() =>
                          operationOnClick(servingsOperationType.down)
                        }
                      >
                        expand_more
                      </i>
                    </div>
                  </div>
                  <div className="text-container details-text-container">
                    <div>
                      <h4>{Math.round(foodGrams)}</h4>
                      <div>grams</div>
                    </div>
                    <div className="details-calories-text">
                      <h4>{Math.round(foodCalories)}</h4>
                      <div>calories</div>
                    </div>
                  </div>
                </div>
                <div className="servings-unit-text">{servingUnit}</div>
              </div>
            </li>
            <li>
              <div className="details-add-item-container">
                <div className="details-day-text">ADD TO TODAY</div>
                <div className="input-field col s12 details-meal-input">
                  <select onChange={handleMealTypeChange}>
                    <option className="details-options-container" value="">
                      Choose your option
                    </option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                  </select>
                </div>
              </div>
              <div
                className="details-add-button-container"
                onClick={handleAddFood}
              >
                <a
                  href="#!"
                  className="modal-close waves-effect waves-teal btn-flat details-add-button"
                >
                  ADD
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
