import React, { useEffect, useContext } from "react";
import SelectModal from "../selectModal/SelectModal";
import FoodContext from "../../context/food/foodContext";

const AddFoodBtn = props => {
  const texterContext = useContext(FoodContext);
  /*const handleOnClick = () => {
    texterContext.texter = true;
    console.log(texterContext.texter);

  };*/
  useEffect(() => {}, [props.handleOnClick]);
  return (
    <div onClick={() => props.handleOnClick} className="fixed-action-btn">
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
