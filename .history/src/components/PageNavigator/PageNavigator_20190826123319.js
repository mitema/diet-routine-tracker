import React, { Component } from "react";
import "./HeaderLine.css";

class HeaderLine extends Component {
  render() {
    return (
      <div>
        <i className="material-icons" style={{ color: "black" }}></i>

        <div className="header-line">Today</div>
      </div>
    );
  }
}

export default HeaderLine;
