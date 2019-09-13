import React from "react";
import "./DetailsModal.css";
import foodContext from "../components/";
const DetailsModal = () => {
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
