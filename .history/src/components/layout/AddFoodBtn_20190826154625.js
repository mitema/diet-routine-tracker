import React from "react";

const AddFoodBtn = () => {
  return (
    <div className="relative-action-btn">
      <a
        href="#search-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
};
export default AddFoodBtn;
