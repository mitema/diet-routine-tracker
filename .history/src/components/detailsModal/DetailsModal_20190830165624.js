import React, { useContext, useState, useEffect } from "react";
import "./DetailsModal.css";
import FoodContext from "../../context/food/foodContext";
const DetailsModal = () => {
  const foodContext = useContext(FoodContext);
  const [foodDetails, setFoodDetails] = useState("");
  const { foodItem, foodItemClicked } = foodContext;

  useEffect(() => {
    if (foodItemClicked) {
    }
  });
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
                  class="material-icons circle icon-circle"
                  style={{ borderRaduis: "5px !important" }}
                >
                  <img
                    src={foodItem[0].photo.thumb}
                    alt="food-icon"
                    style={{
                      borderRadius: "5px",
                      width: "40px",
                      height: "40px"
                    }}
                  />
                </i>
                <span className="title">{foodItem.food_name}</span>
              </div>
              <div>
                <h6>Cheese</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
