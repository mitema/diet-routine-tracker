import React, { Component } from "react";
import "./HeaderLine.css";

class HeaderLine extends Component {
  render() {
    return (
      <div>
        <Button>
          <i className="material-icons">arrow_back</i>
        </Button>
        <div className="header-line">Today</div>
        <Button></Button>
      </div>
    );
  }
}

export default HeaderLine;
