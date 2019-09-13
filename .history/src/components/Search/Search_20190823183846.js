import React, {Component} from "react";
import "./Search.css";

class Search extends Component{

 onChange = (e) => this.setState({[e.target.name]: e.target.value})
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
