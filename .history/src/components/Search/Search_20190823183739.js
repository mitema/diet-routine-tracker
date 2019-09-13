import React, {Component}from "react";
import "./Search.css";

class Search extends Component = (props) => {

const onChange = (e) => {e.target.value}
  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="Search..."
        onChange={this.onChange}
      />
    </div>
  );
};
export default Search;
