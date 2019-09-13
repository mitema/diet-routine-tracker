import React from "react";
import "./.css";

const DetailsModal = () => {
  return (
    <div className="modal food-details-container">
      <div
        id="details-modal"
        className="modal"
        style={{
          width: "95%",
          marginTop: "10px",
          height: "100%",
          backgroundColor: "transparent"
        }}
      >
        <div className="modal-content">
          <div className="row">
            <div className="icon-and-text-container">
              <div>
                <img src="" alt="text-photo" />
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
