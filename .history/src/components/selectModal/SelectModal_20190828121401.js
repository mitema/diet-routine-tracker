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
              <div>
                <i class="material-icons circle">folder</i>
                <a style={{ borderBottom: "1px solid gray" }}>
                  <span class="title">Title</span>
                </a>
              </div>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
