import React, { useState, useEffect, useContext } from "react";
import "./Search.css";
import FoodContext from "../../context/food/foodContext";

const Search = () => {
  const foodContext = useContext(FoodContext);
  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  useEffect(() => {
    if (text !== "") {
      foodContext.searchFood(text);
      setText("");
    }
  }, [foodContext, text]);

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        name="text"
        value={text}
        placeholder="Search..."
        onChange={onChange}
      />
    </div>
  );
};
export default Search;
