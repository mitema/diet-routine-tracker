import React, { Component } from "react";
import "./PageNavigator.css";

const PageNavigator = () => {
  return (
    <div>
      <div className="period-container">
        <div>
          <a>
            <i
              className="material-icons arrow-back-icon"
              style={{ color: "white" }}
            >
              arrow_back_ios
            </i>
          </a>
        </div>
        <div className="period-title">Today</div>
        <div>
          <a>
            <i
              className="material-icons arrow-forward-icon"
              style={{ color: "white" }}
            >
              arrow_forward_ios
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNavigator;
