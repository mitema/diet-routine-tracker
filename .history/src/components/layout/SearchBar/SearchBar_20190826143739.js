import React, { useState, useEffect, useContext } from "react";
import "./SearchBar.css";
import FoodContext from "../../context/food/foodContext";

const SearchBar = () => {
  const [text, setText] = useState("");
  const foodContext = useContext(FoodContext);
  const [foods] = foodContext;

  const handleOnChange = e => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text !== "") {
      foodContext.searchFood(text);
      console.log(foods);
      setText("");
    }
  }, [text, foodContext]);

  return (
    <nav className="search-bar white " style={{ borderRadius: "5px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
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

export default SearchBar;
