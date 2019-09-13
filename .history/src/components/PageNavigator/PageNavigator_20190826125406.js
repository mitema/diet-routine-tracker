import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <span>
          <a>
            <i
              className="material-icons"
              style={{ color: "white", margin: "0" }}
            >
              arrow_back
            </i>
          </a>
          <span className="header-line">Today</span>
        </span>
      </div>
    );
  }
}

export default PageNavigator;
