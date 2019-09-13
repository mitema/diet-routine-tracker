import React, { useState, useEffect, useContext } from "react";
import "./SearchBox.css";
import FoodContext from "../../../context/food/foodContext";

const SearchBox = props => {
  const foodContext = useContext(FoodContext);
  const focusInput = React.createRef();
  const { foods, isAddBtnClicked, addButtonClicked } = foodContext;
  const [text, setText] = useState("");

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    addButtonClicked();
  };
  useEffect(() => {
    if (isAddBtnClicked) {
      focusInput.current.focus();
    }
    if (text !== "") {
      foodContext.searchFood(text);
      setText("");
    }
  }, [foodContext, focusInput, isAddBtnClicked, foods, text]);

  const navStyle = {
    width: props.modalWidth,
    borderRadius: "5px",
    margin: "auto",
    marginTop: props.modalMarginTop,
    marginBottom: props.modalMarginBottom,
    backgroundColor: props.backgroundColor
  };

  const searchContainerStyle = { height: props.heightValue };

  return (
    <div className="search-container" style={searchContainerStyle}>
      <nav className={props.classNameType} style={navStyle}>
        <div className="nav-wrapper" onClick={handleOnClick}>
          <form>
            <a href="#select-food-modal" className="modal-trigger">
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="Search Foods"
                  style={inputStyle}
                  ref={focusInput}
                  onChange={handleOnChange}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons search-icon" style={iconStyle}>
                    search
                  </i>
                </label>
              </div>
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};

const iconStyle = { color: "black" };
const inputStyle = { borderRadius: "5px" };
SearchBox.defaultProps = {
  modalWidth: "95%",
  heightvalue: "48px",
  modalMarginBottom: "5px",
  modalMarginTop: "2px",
  classNameType: "search-bar",
  backgroundColor: "white"
};

export default SearchBox;
