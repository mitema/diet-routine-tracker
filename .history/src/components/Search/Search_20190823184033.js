import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate() {}

  render() {
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
  }
}
export default Search;
