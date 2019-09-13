import React, { useContext } from "react";
import SelectModal from "../selectModal/SelectModal";
import FoodContext from "../../context/food/foodContext";

const AddFoodBtn = props => {
  const texterContext = useContext(FoodContext);
  /*const handleOnClick = () => {
    texterContext.texter = true;
    console.log(texterContext.texter);
  };*/
  return (
    <div className="fixed-action-btn">
      <a
        href="#select-food-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
        onClick={props.handleOnClick}
      >
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
};
export default AddFoodBtn;
