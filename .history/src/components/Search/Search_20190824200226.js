import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";

const Search = ({ searchFood }) => {
  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);

  useEffect(() => {
    searchFood(text);
  });

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
