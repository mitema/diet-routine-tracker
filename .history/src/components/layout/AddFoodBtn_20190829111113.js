import React, { useEffect, useContext } from "react";
import SelectModal from "../selectModal/SelectModal";
import FoodContext from "../../context/food/foodContext";

const AddFoodBtn = props => {
  const btnContext = useContext(FoodContext);

  const handleOnClick = () => {
    btnContext.addButtonClicked();
    console.log("add btn is not clicked");
    if (btnContext.isAddbtnClicked) {
      console.log("add button is clicked");
    }
  };

  useEffect(() => {
    console.log(props.handleOnClick);
    console.log("in btn");
  });
  return (
    <div onClick={handleOnClick} className="fixed-action-btn">
      <a
        href="#select-food-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
};
export default AddFoodBtn;
