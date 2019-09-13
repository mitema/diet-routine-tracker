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
    <nav className="search-bar">
      <div className="nav-wrapper">
        <div className="search-content">
          <form>
            <div className="input-field" style={{ backgroundColor: "white" }}>
              <input
                id="search"
                type="search"
                placeholder="Search foods..."
                onChange={handleOnChange}
                required
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons" style={{ color: "black" }}>
                  search
                </i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
        <div className="navigator-container">
          <ul class="pagination">
            <li class="disabled">
              <a href="#!">
                <i class="material-icons">chevron_left</i>
              </a>
            </li>
            <li class="active">
              <a href="#!">1</a>
            </li>
            <li class="waves-effect">
              <a href="#!">2</a>
            </li>
            <li class="waves-effect">
              <a href="#!">3</a>
            </li>
            <li class="waves-effect">
              <a href="#!">4</a>
            </li>
            <li class="waves-effect">
              <a href="#!">5</a>
            </li>
            <li class="waves-effect">
              <a href="#!">
                <i class="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SearchField;
