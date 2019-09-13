import React, { useState, useEffect, useContext } from "react";
import "./SearchBox.css";
import FoodContext from "../../../context/food/foodContext";

const SearchField = () => {
  const [text, setText] = useState("");
  const foodContext = useContext(FoodContext);
  const { foods } = foodContext;

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handleOnFocus = () => {
    console.log("in on focus");
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
          <ul>
            <li>
              <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                  <a
                    href="#!"
                    class="modal-close waves-effect waves-green btn-flat"
                  >
                    Agree
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SearchField;
