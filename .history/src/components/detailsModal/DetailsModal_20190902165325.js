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
          <div className="row">
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
              className="input-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                marginLeft: "10px",
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
              <span>TEST</span>
            </div>

            <div style={{ marginLeft: "20px" }}>slice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
