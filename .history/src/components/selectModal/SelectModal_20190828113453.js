import React from "react";

const SelectModal = () => {
  return (
    <div
      id="select-food-modal"
      className="modal"
      style={{ width: "95%", marginTop: "10px" }}
    >
      <div className="modal-content" style={{ backgroundColor: "white" }}>
        <h6>Common</h6>
        <div className="row">
          <ul class="collection" style={{ border: "none" }}>
            <li class="collection-item avatar">
              <img src="images/yuna.jpg" alt="" class="circle" />
              <span class="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
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
