import React, { Component } from "react";
import "./PageNavigator.css";

const PageNavigator = () => {
  return (
    <div className="navigator-container">
      <a>
        <i
          className="material-icons"
          style={{ color: "white", width: "7.4px", height: "12px" }}
        >
          arrow_back_ios
        </i>
      </a>
      <div className="header-line">Today</div>
      <a>
        <i
          className="material-icons"
          style={{ color: "white", width: "7.4px", heigh: "12px" }}
        >
          arrow_forward_ios
        </i>
      </a>
    </div>
  );
};

export default PageNavigator;
