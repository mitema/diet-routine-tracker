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
    <nav>
      <div class="nav-wrapper">
        <div className="center">
          <form>
            <input
              id="search"
              type="search"
              placeholder="Search foods..."
              onChange={handleOnChange}
              required
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SearchField;
