import React, { useContext, useState, useEffect } from "react";
import "./DetailsModal.css";
import FoodContext from "../../context/food/foodContext";
const DetailsModal = () => {
  const foodContext = useContext(FoodContext);
  const [icon, setIcon] = useState("");
  const [foodName, setFoodName] = useState("");
  const [servingUnit, setServingUnit] = useState("");
  const [foodGrams, setFoodGrams] = useState("");
  const [foodCalories, setFoodCalories] = useState("");
  const [servingsQty, setServingsQty] = useState("");
  const { foodItemClicked, nutrientInfo, addFoodItem } = foodContext;
  const [servingsSize, setServingsSize] = useState(1);
  const [mealType, setMealType] = useState("Breakfast");

  const handleInputOnChange = e => {
    if (e.target.value) {
      setServingsSize(e.target.value);
    } else {
      setServingsSize(1);
    }
  };

  const handleMealTypeChange = e => {
    setMealType(e.target.value);
  };

  useEffect(() => {
    if (foodItemClicked) {
      if (nutrientInfo) {
        setIcon(nutrientInfo.foods[0].photo.thumb);
        setFoodName(nutrientInfo.foods[0].food_name);
        setServingUnit(nutrientInfo.foods[0].serving_unit.split("(")[0]);
        setFoodGrams(
          Math.floor(nutrientInfo.foods[0].serving_weight_grams) * servingsSize
        );
        setFoodCalories(
          Math.floor(nutrientInfo.foods[0].nf_calories) * servingsSize
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
      foodName: foodName,
      icon: icon,
      servingUnit: servingUnit,
      foodGrams: foodGrams,
      foodCalories: foodCalories,
      servingsQty: servingsQty,
      servingsSize: servingsSize,
      mealType: mealType
    };
    addFoodItem(newFoodItem);
  };

  return (
    <div>
      <div
        id="details-modal"
        className="modal details-food-modal"
        style={{
          width: "95%",
          marginTop: "10px",

          backgroundColor: "transparent"
        }}
      >
        <div
          className="modal-content "
          style={{ padding: "0px", backgroundColor: "white", height: "60%" }}
        >
          <div className="icon-and-text-container">
            <div>
              <i
                className="material-icons circle icon-circle"
                style={{ borderRaduis: "5px !important" }}
              >
                <img
                  src={icon}
                  alt="food-icon"
                  style={{
                    borderRadius: "5px",
                    width: "40px",
                    height: "40px"
                  }}
                />
              </i>
              <span className="title">{foodName}</span>
            </div>
          </div>
          <div
            className="row servings-container "
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0rem"
            }}
          >
            <div
              className="input-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                marginRight: "auto",
                marginLeft: "1rem",
                width: "40%",
                borderBottom: "5px solid black",
                backgroundColor: "#fafafa",
                borderRadius: "5px"
              }}
            >
              <div
                className="input-field col s6"
                style={{
                  borderBottom: "0px",
                  marginLeft: "0px",
                  left: "0px",
                  right: "0px",
                  width: "100%",
                  marginBottom: "0px"
                }}
              >
                <input
                  id="servings-size"
                  defaultValue={servingsQty}
                  type="text"
                  style={{ borderBottom: "0px", height: "2rem" }}
                  onChange={handleInputOnChange}
                />
                <label htmlFor="servings-size">Servings</label>
              </div>
              <div className="operations-icon">
                <i
                  className="material-icons up-arrow"
                  style={{ color: "black", fontSize: "15px" }}
                >
                  expand_less
                </i>

                <i
                  className="material-icons down-arrow"
                  style={{ color: "black", fontSize: "15px" }}
                >
                  expand_more
                </i>
              </div>
            </div>
            <div
              className="text-container"
              style={{ display: "flex", marginRight: "1rem" }}
            >
              <div>
                <h4>{foodGrams}</h4>
                <div>grams</div>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <h4>{foodCalories}</h4>
                <div>calories</div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "20px", marginBottom: "2rem" }}>
            {servingUnit}
          </div>

          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <div
              className="input-field col s12"
              style={{ backgroundColor: "gray", borderRadius: "5px" }}
            >
              <select onChange={handleMealTypeChange}>
                <option style={{ paddingLeft: "5rem" }} value="">
                  Choose your option
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
              <label
                style={{ left: "0px", fontSize: "1rem", marginBottom: ".5rem" }}
              >
                ADD TO TODAY
              </label>
            </div>
          </div>
          <div
            onClick={handleAddFood}
            style={{ display: "flex", marginBottom: "1.5rem" }}
          >
            <a
              className="waves-effect waves-teal btn-flat"
              style={{
                marginLeft: "auto",
                marginRight: "1.5rem",
                marginBottom: "5px",
                backgroundColor: "green"
              }}
            >
              ADD
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
