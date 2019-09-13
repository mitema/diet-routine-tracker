import React, { useState, useEffect, useContext } from "react";
import FoodContext from "../../../context/food/foodContext";
import "./PageNavigator.css";

const PageNavigator = props => {
  const [dayId, setDayId] = useState(0);
  const foodContext = useContext(FoodContext);
  const { setSelectedDayId } = foodContext;

  const handleBackArrowClick = e => {
    e.preventDefault();
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
      <div className="period-container" onClick={handleBackArrowClick}>
        <ul className="pagination">
          <li className="waves-effect" onClick={handleBackArrowClick}>
            <a href="#" onClick={handleBackArrowClick}>
              <i className="material-icons" onClick={(e)=>{e.preventDefault()}>chevron_left</i>
            </a>
          </li>
          <li className="waves-effect">
            <a href="#">Today</a>
          </li>
          <li className="waves-effect" onClick={handleBackArrowClick}>
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
