import React, { useState, useEffect, useContext } from "react";
import "./SearchBox.css";
import FoodContext from "../../../context/food/foodContext";
import { Redirect } from "react-router-dom";
import SelectModal from "../../selectModal/SelectModal";

const SearchField = () => {
  const [text, setText] = useState("");
  const foodContext = useContext(FoodContext);
  const { foods, addButtonClicked } = foodContext;
  const focusInput = React.createRef();

  const handleOnChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("btn clicked");
    if (text !== "") {
      foodContext.searchFood(text);
      console.log(foods);
      setText("");
    }
    if (addButtonClicked) {
      console.log("in search box");
      setTimeout(() => {
        focusInput.current.focus();
      }, 100);
    }
  }, [text, foodContext, foods, focusInput, addButtonClicked]);

  return (
    <div className="header-content">
      <div className="search-container">
        <nav
          className="search-bar"
          style={{
            width: "95%",
            borderRadius: "5px",
            margin: "auto",
            marginTop: "10px"
          }}
        >
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  style={{ borderRadius: "5px" }}
                  onChange={handleOnChange}
                  ref={focusInput}
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
    </div>
  );
};

export default SearchField;
