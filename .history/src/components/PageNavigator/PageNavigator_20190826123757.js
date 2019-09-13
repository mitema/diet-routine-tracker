import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <i className="material-icons" style={{ color: "white" }}>
          arrow_back
        </i>
        <span className="header-line">Today</span>
      </div>
    );
  }
}

export default PageNavigator;
