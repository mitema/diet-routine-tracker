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

              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  marginLeft: "0px",
                  marginRight: "0px",
                  borderBottom: "5px solid gray",
                  backgroundColor: "gray"
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
                    value="Alvin"
                    id="first_name2"
                    type="text"
                    className="validate"
                    style={{ borderBottom: "0px" }}
                  />
                  <label className="active" htmlFor="first_name2">
                    First Name
                  </label>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
