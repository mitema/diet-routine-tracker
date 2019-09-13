import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn-small"
          style={{ marginRight: "6px" }}
        >
          Button
        </a>
        <h5 className="header-line">Today</h5>
      </div>
    );
  }
}

export default PageNavigator;
