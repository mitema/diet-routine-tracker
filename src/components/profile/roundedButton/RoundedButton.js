import React from "react";
import "./RoundedButton.css";

const RoundedButton = props => {
  return (
    <div className="round-button">
      <div>
        <b>{props.value}</b>
        <br />
        {props.unit}
      </div>
    </div>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
