import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../../context/food/foodContext";
import "./PageNavigator.css";

const PageNavigator = props => {
  const [dayId, setDayId] = useState(0);
  const foodContext = useContext(FoodContext);
  const { setSelectedDayId, selectedDayId } = foodContext;

  const handleBackArrowClick = () => {
    if (dayId === 0) {
      setDayId(0);
    } else {
      setDayId(dayId - 1);
    }
  };

  const handleForwardArrowClick = () => {
    setDayId(dayId + 1);
  };
  useEffect(() => {
    setSelectedDayId(dayId);
    console.log(selectedDayId);
  }, [setSelectedDayId, dayId, selectedDayId]);
  return (
    <div className={props.className}>
      <div className="period-container" style={{ marginTop: "1rem" }}>
        <div>
          <a>
            <i
              className="material-icons arrow-back-icon"
              style={{
                color: "#6200ee",
                marginLeft: "1.5rem",
                fontSize: "1rem"
              }}
              onClick={handleBackArrowClick}
            >
              arrow_back_ios
            </i>
          </a>
        </div>
        <div className="period-title">
          <h5>Today</h5>
        </div>
        <div>
          <a>
            <i
              className="material-icons arrow-forward-icon"
              style={{
                color: "#6200ee",
                fontSize: "1rem",
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
