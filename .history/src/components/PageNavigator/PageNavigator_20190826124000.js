import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div className="header-line">
        <i className="material-icons" style={{ color: "white" }}>
          arrow_back
        </i>
        Today
        <i className="material-icons" style={{ color: "white" }}>
          arrow_forward
        </i>
      </div>
    );
  }
}

export default PageNavigator;
