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
    <nav className="justify-content-center">
      <div className="nav-wrapper">
        <form>
          <div
            className="input-field"
            style={{ backgroundColor: "white", display: "flex" }}
          >
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
    </nav>
  );
};

export default SearchField;
