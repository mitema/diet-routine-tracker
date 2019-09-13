import React from "react";

const SelectModal = () => {
  return (
    <div
      id="select-food-modal"
      className="modal"
      style={{ width: "95%", marginTop: "10px" }}
    >
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="firstName" />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
