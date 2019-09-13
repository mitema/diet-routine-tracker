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
          <div className="header-line">Today</div>
        </span>
      </div>
    );
  }
}

export default PageNavigator;
