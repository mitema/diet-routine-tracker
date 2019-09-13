import React from "react";

const RoundedButton = () => {
  return (
    <div
      className=""
      style={{
        width: "56px",
        height: "56px",
        marginLeft: "0.2rem",
        textTransform: "lowercase",
        borderRadius: "50%"
      }}
    >
      test
    </div>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
