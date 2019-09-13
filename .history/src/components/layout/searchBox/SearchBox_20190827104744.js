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
    <nav style={{ backgroundColor: "black" }}>
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
    /*<div className="navigator-container">
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
  </nav>*/
  );
};

export default SearchField;
