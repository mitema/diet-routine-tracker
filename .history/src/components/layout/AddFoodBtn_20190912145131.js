import React, { useContext } from "react";
import FoodContext from "../../context/food/foodContext";

const AddFoodBtn = props => {
  const addFoodbtnContext = useContext(FoodContext);

  const handleOnClick = () => {
    addFoodbtnContext.addButtonClicked();
  };

  return (
    <div onClick={handleOnClick} className="fixed-action-btn">
      <a
        href="#select-food-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i
          className="large material-icons"
          style={{ backgroundColor: "#6200ee" }}
        >
          add
        </i>
      </a>
    </div>
  );
};
export default AddFoodBtn;
