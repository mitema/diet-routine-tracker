import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div className="navigator-container">
        <a>
          <i
            className="material-icons"
            style={{ color: "white", width: "8px" }}
          >
            arrow_back_ios
          </i>
        </a>
        <div className="header-line">Today</div>
        <a>
          <i
            className="material-icons"
            style={{ color: "white", width: "8px" }}
          >
            arrow_forward_ios
          </i>
        </a>
      </div>
    );
  }
}

export default PageNavigator;
