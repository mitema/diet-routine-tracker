import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../../context/food/foodContext";
import "./PageNavigator.css";

const PageNavigator = props => {
  const [dayId, setDayId] = useState(0);
  const foodContext = useContext(FoodContext);
  const { setSelectedDayId } = foodContext;

  const handleBackArrowClick = e => {
    e.preventDefault();
    alert("here");
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
      <div className="period-container">
        <ul className="pagination">
          <li className="waves-effect">
            <a href="#">
              <i className="material-icons" onClick={handleBackArrowClick}>
                chevron_left
              </i>
            </a>
          </li>
          <li className="waves-effect">
            <a href="#">Today</a>
          </li>
          <li className="waves-effect">
            <a href="#">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageNavigator;
