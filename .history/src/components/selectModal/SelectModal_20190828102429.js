import React from "react";

const SelectModal = () => {
  return (
    <div>
      <a
        href="#select-food-modal"
        className="waves-effect waves-light btn modal-trigger"
      >
        Modal
      </a>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </div>
  );
};
export default SelectModal;
