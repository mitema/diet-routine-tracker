import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate(prevProps: any, prevState: any) {
    const { text } = this.state;
    if (text != prevState.str) {
      console.log("update state");
    }
    this.props.searchFood(this.state.text);
  }

  searchFood = async text => {
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${text}`
    );
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
