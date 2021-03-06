import React, { useContext } from "react";
import SelectModal from "../selectModal/SelectModal";

const AddFoodBtn = () => {
  const handleOnClick = () => {
    console.log("in o");
  };
  return (
    <div className="fixed-action-btn">
      <a
        href="#select-food-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
        onClick={handleOnClick}
      >
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
};
export default AddFoodBtn;
