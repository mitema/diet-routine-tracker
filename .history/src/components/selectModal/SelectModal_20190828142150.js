import React, { useContext } from "react";

const SelectModal = () => {
  return (
    <div className="modal-content" style={{ backgroundColor: "white" }}>
      <div className="row">
        <ul class="collection" style={{ border: "none" }}>
          <li>
            <h6>Common</h6>
          </li>
          <li class="collection-item avatar" style={{ borderBottom: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #e0e0e0"
              }}
            >
              <i class="material-icons circle">folder</i>
              <a style={{ paddingBottom: "10px", color: "black" }}>
                <span class="title">Title</span>
                <br />
                <span class="title">Title</span>
              </a>
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
  );
};
export default SelectModal;
