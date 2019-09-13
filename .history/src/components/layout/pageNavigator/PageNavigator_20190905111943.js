import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../../context/food/foodContext";
import "./PageNavigator.css";

const PageNavigator = props => {
  const [dayId, setDayId] = useState(0);
  const foodContext = useContext(FoodContext);
  const { setSelectedDayId } = foodContext;
  const handleBackArrowClick = () => {
    setDayId(dayId - 1);
  };

  const handleForwardArrowClick = () => {
    console.log("clicked forward");
    setDayId(dayId + 1);
  };
  useEffect(() => {
    setSelectedDayId(dayId);
  }, [setSelectedDayId, dayId]);
  return (
    <div className={props.className}>
      <div className="period-container">
        <div onClick={handleBackArrowClick}>
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
          <a onClick={handleForwardArrowClick}>
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
