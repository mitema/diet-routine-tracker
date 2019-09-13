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
      // focusInput.current.focus();
    }
    if (text !== "") {
      foodContext.searchFood(text);
      setText("");
    }
  }, [foodContext, focusInput, isAddBtnClicked, foods, text]);

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
        <div className="nav-wrapper" onClick={handleOnClick}>
          <form>
            <a href="#select-food-modal" className="modal-trigger">
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="Search Foods"
                  style={{ borderRadius: "5px" }}
                  ref={focusInput}
                  onChange={handleOnChange}
                />
                <label className="label-icon" htmlFor="search">
                  <i
                    className="material-icons search-icon"
                    style={{ color: "black" }}
                  >
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
SearchBox.defaultProps = {
  modalWidth: "95%",
  modalMarginBottom: "5px",
  modalMarginTop: "10px"
};

export default SearchBox;
