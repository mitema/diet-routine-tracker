import React, { useState, useEffect, useContext } from "react";
import "./SearchBox.css";
import FoodContext from "../../../context/food/foodContext";

const SearchField = () => {
  const [text, setText] = useState("");
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;

  const handleOnChange = e => {
    console.log("here");
    setText(e.target.value);
  };

  useEffect(() => {
    if (text !== "") {
      foodContext.searchFood(text);
      console.log(foods);
      setText("");
    }
  }, [text, foodContext, foods]);

  return (
    <div className="header-content">
      <div className="search-container">
        <nav
          className="search-bar center"
          style={{ width: "50%", borderRadius: "5px" }}
        >
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" />
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

      <div>
        <div>
          <a>
            <i
              className="material-icons arrow-back-icon"
              style={{ color: "white" }}
            >
              arrow_back_ios
            </i>
          </a>
        </div>
        <div>
          <h4>Today</h4>
        </div>
        <div>
          <a>
            <i
              className="material-icons arrow-forward-icon"
              style={{ color: "white" }}
            >
              arrow_forward_ios
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
