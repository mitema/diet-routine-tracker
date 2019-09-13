import React, { Component } from "react";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate(prevProps: any, prevState: any) {
    const { text } = this.state;
    if (text !== prevState.str) {
      this.searchFood(text);
    }
  }

  searchFood = async text => {
    const config = {
      headers: {
        "x-app-id": "4d1bb501",
        "x-app-key": "8bc3d5bb151112034268ba72277aa161"
      }
    };
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${text}`,
      config
    );
    console.log(res);
  };

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
