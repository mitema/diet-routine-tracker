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
    <a href="#" class="brand-logo center">Logo</a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">JavaScript</a></li>
    </ul>
  </div>
</nav>
        {/*<div className="navigator-container">
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
        </div>*/}
      </div>
    </nav>
  );
};

export default SearchField;
