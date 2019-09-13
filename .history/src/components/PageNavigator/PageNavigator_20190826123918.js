import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <i className="material-icons" style={{ color: "white" }}>
          arrow_back
        </i>
        <div className="header-line">
          <i className="material-icons" style={{ color: "white" }}>
            arrow_back
          </i>
          Today
        </div>
      </div>
    );
  }
}

export default PageNavigator;
