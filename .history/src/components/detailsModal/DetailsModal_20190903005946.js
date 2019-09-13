import React, { useContext, useState, useEffect } from "react";
import "./DetailsModal.css";
import FoodContext from "../../context/food/foodContext";
const DetailsModal = () => {
  const foodContext = useContext(FoodContext);
  const [icon, setIcon] = useState("");
  const [foodName, setFoodName] = useState("");
  const { foodItem, foodItemClicked } = foodContext;
  console.log(foodItem);

  useEffect(() => {
    if (foodItemClicked) {
      setIcon(foodItem[0].photo.thumb);
      setFoodName(foodItem[0].food_name);
    }
  }, [setIcon, setFoodName, foodItem, foodItemClicked, foodName]);

  return (
    <div>
      <div
        id="details-modal"
        className="modal details-food-modal"
        style={{
          width: "95%",
          marginTop: "10px",
          height: "60%",
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
                  type="text"
                  style={{ borderBottom: "0px", height: "2rem" }}
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
                <h4>28</h4>
                <div>grams</div>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <h4>113</h4>
                <div>calories</div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "20px" }}>slice</div>

          <div style={{ marginLeft: "20px" }}>
            <div class="input-field col s12">
              <select>
                <option
                  style={{ marginLeft: "1rem" }}
                  value=""
                  disabled
                  selected
                >
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Materialize Select</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
