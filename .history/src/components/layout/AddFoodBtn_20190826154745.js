import React from "react";

const AddFoodBtn = () => {
  return (
    <div className="fixed-action-btn" style={{ marginRight: "20%" }}>
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
