import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div className="navigator-container">
        <a>
          <i className="material-icons" style={{ color: "white", margin: "0" }}>
            arrow_back
          </i>
        </a>
        <div className="header-line">Today</div>
        <a>
          <i className="material-icons" style={{ color: "white", margin: "0" }}>
            arrow_forward
          </i>
        </a>
      </div>
    );
  }
}

export default PageNavigator;
