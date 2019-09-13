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
      <div className="nav-wrapper">
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">
              <i class="material-icons left">search</i>Link with Left Icon
            </a>
          </li>
          <li>
            <a href="badges.html">
              <i class="material-icons right">view_module</i>Link with Right
              Icon
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SearchField;
