import React, { useState, useEffect, useContext } from "react";
import "./SearchBox.css";
import FoodContext from "../../../context/food/foodContext";
import { Redirect } from "react-router-dom";
import SelectModal from "../../selectModal/SelectModal";

const SearchField = () => {
  const [text, setText] = useState("");
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handleOnFocus = e => {
    // return <Redirect to="/#select-food-modal" />;
    e.target.focus();
  };

  useEffect(() => {
    console.log("should I update");
    if (text !== "") {
      foodContext.searchFood(text);
      console.log(foods);
      console.log(texter);
      setText("");
    }
  }, [text, foodContext, foods]);

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
                  onFocus={handleOnFocus}
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
