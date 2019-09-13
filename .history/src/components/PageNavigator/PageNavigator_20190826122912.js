import React, { Component } from "react";
import "./HeaderLine.css";

class HeaderLine extends Component {
  render() {
    return (
      <div>
        <Button></Button>
        <div className="header-line">Today</div>
        <Button></Button>
      </div>
    );
  }
}

export default HeaderLine;
