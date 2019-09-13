import React, { useState, useEffect, useContext } from "react";
import "./SearchBox.css";
import FoodContext from "../../../context/food/foodContext";
import { Redirect } from "react-router-dom";
import SelectModal from "../../selectModal/SelectModal";
const focusInput = React.createRef();
const { foods, isAddBtnClicked } = foodContext;

const SearchBox = props => {
  const foodContext = useContext(FoodContext);
  const focusInput = React.createRef();
  const { isAddBtnClicked } = foodContext;
  useEffect(() => {
    if (isAddBtnClicked) {
      console.log("in select modal");
      focusInput.current.focus();
    }
  });

  return (
    <div className="search-container">
      <nav
        className="search-bar"
        style={{
          width: props.modalWidth,
          borderRadius: "5px",
          margin: "auto",
          marginTop: props.modalMarginTop,
          marginBottom: props.modalMarginBottom
        }}
      >
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                style={{ borderRadius: "5px" }}
                ref={props.ref}
              />
              <label className="label-icon" htmlFor="search">
                <i
                  className="material-icons search-icon"
                  style={{ color: "black" }}
                >
                  search
                </i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
SearchBox.defaultProps = {
  modalWidth: "95%",
  modalMarginBottom: "5px",
  modalMarginTop: "10px"
};

export default SearchBox;
