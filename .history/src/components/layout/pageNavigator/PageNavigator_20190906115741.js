import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../../context/food/foodContext";
import "./PageNavigator.css";

const PageNavigator = props => {
  const [dayId, setDayId] = useState(0);
  const foodContext = useContext(FoodContext);
  const { setSelectedDayId } = foodContext;
  const week_days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date();
  date.setDate(date.getDate() - 2);
  const previous_two_days = week_days[date.getDay().toString()];

  const days = { "0": "Today", "1": "Yesterday", "2": previous_two_days };

  const handleBackArrowClick = () => {
    if (dayId === 0) {
      setDayId(0);
    } else {
      setDayId(dayId - 1);
    }
  };

  const handleForwardArrowClick = () => {
    if (dayId >= 2) {
      setDayId(0);
    } else {
      setDayId(dayId + 1);
    }
  };
  useEffect(() => {
    setSelectedDayId(dayId);
  }, [dayId]);
  return (
    <div className={props.className}>
      <div className="period-container" style={{ marginTop: "1rem" }}>
        <div>
          <a href="#!">
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
          <h5>
            <b>{days[dayId.toString()]}</b>
          </h5>
        </div>
        <div>
          <a href="#!">
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
