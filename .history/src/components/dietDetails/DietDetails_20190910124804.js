import React from 'react'
import './DietDetails.css'



<div className="diet-goal-container">
            <div className="diet-consumed-container">
              <h5>{`${getConsumedCalories()} cal`}</h5>
              <div style={{ color: "#787878" }}>consumed</div>
            </div>
            <div className="goal-container">
              <h5>{`${getDailyGoalCalories()} cal`}</h5>
              <div style={{ color: "gray" }}>daily goal</div>
            </div>
          </div>
          <div
            className="progress"
            style={{
              display: "flex",
              backgroundColor: "#E6E6FA",
              marginLeft: "1.5rem",
              marginRight: "3rem",
              marginBottom: "0rem",
              width: "90%",
              marginTop: "1rem"
            }}
          >
            <div
              className="determinate"
              style={{ width: `${getWidth()}%`, backgroundColor: "#6200ee" }}
            ></div>
          </div>
          <div
            style={{
              textAlign: "center"
            }}
          >
            {`${getWidth()}%`}
          </div>
          <div className="diet-types-container">
            <div className="diet-type">
              <h6>{Math.round(getMealTypesTotal().breakfast)}</h6>
              <div style={{ color: "#787878" }}>Breakfast</div>
            </div>
            <div className="diet-type">
              <h6>{Math.round(getMealTypesTotal().lunch)} </h6>
              <div style={{ color: "#787878" }}>Lunch</div>
            </div>
            <div className="diet-type">
              <h6>{Math.round(getMealTypesTotal().dinner)} </h6>
              <div style={{ color: "#787878" }}>Dinner</div>
            </div>
            <div className="diet-type">
              <h6>{Math.round(getMealTypesTotal().snack)} </h6>
              <div style={{ color: "#787878" }}>Snack</div>
            </div>
          </div>