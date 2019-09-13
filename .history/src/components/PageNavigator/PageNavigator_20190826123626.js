import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <i className="material-icons" style={{ color: "white" }}>
          search
        </i>

        <div className="header-line">Toy</div>
      </div>
    );
  }
}

export default PageNavigator;
