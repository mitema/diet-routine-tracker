import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../../context/food/foodContext";
import "./PageNavigator.css";

const PageNavigator = props => {
  const [dayId, setDayId] = useState(0);
  const foodContext = useContext(FoodContext);
  const { setSelectedDayId } = foodContext;

  const handleBackArrowClick = () => {
    console.log("here");
    setDayId(dayId - 1);
  };

  const handleForwardArrowClick = () => {
    setDayId(dayId + 1);
  };
  useEffect(() => {
    setSelectedDayId(dayId);
  }, [setSelectedDayId, dayId]);
  return (
    <div className={props.className}>
      <div className="period-container" style={{ marginTop: "1rem" }}>
        <div>
          <a>
            <i
              className="material-icons arrow-back-icon"
              style={{
                color: "black",
                marginLeft: "1.5rem",
                fontSize: "1.5rem"
              }}
              onClick={handleBackArrowClick}
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
              style={{
                color: "black",
                fontSize: "1.5rem",
                marginRight: "1.5rem"
              }}
              onClick={handleForwardArrowClick}
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
