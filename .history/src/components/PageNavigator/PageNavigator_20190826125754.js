import React, { Component } from "react";
import "./PageNavigator.css";

class PageNavigator extends Component {
  render() {
    return (
      <div>
        <a className="waves-effect waves-light btn-small" style={{margin-right:'6px'}}>Button</a>
        <div className="header-line">Today</div>
      </div>
    );
  }
}

export default PageNavigator;
