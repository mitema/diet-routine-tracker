import React from "react";

const RoundedButton = props => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        width: "56px",
        height: "56px",
        marginLeft: "0.2rem",
        textTransform: "lowercase",
        borderRadius: "50%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#300B74",
        color: "white"
      }}
    >
      <div>
        {props.value}
        <br />
      </div>
      <div>{props.unit}</div>
    </div>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
