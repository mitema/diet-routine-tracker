import React from "react";
import "./RoundedButton.css";

const RoundedButton = props => {
  return (
    <div className="round-button" style={{ backgroundColor: "#300B74" }}>
      <div>{props.value}</div>
      <br />
      <div>{props.unit}</div>
    </div>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
