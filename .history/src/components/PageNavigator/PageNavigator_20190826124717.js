import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <a>
          <i className="material-icons" style={{ color: "white" }}>
            arrow_back
          </i>
        </a>
        <div className="header-line">Today</div>
      </div>
    );
  }
}

export default PageNavigator;
