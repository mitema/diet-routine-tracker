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
    <nav class="white">
      <div class="nav-wrapper">
        <ul class="hide-on-med-and-down center">
          <li>
            <div class="center">
              <div class="col s12 ">
                <div class="row center" id="topbarsearch">
                  <div class="input-field red-text">
                    <i class="red-text material-icons prefix">search</i>
                    <input
                      type="text"
                      placeholder="search"
                      id="autocomplete-input"
                      class="autocomplete red-text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SearchField;
