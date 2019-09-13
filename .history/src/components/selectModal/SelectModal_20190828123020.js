import React from "react";

const SelectModal = () => {
  return (
    <div
      id="select-food-modal"
      className="modal"
      style={{ width: "95%", marginTop: "10px" }}
    >
      <div className="modal-content" style={{ backgroundColor: "white" }}>
        <div className="row">
          <ul class="collection" style={{ border: "none" }}>
            <li>
              <h6>Common</h6>
            </li>
            <li class="collection-item avatar" style={{ borderBottom: "none" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i class="material-icons circle">folder</i>
                <span
                  class="title"
                  style={{ borderBottom: "1px solid #e0e0e0;" }}
                >
                  Title
                </span>
              </div>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
