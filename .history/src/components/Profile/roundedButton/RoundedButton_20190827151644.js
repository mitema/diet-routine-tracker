import React from "react";

const RoundedButton = () => {
  return (
    <div className="circle" style={{ width: "56px" }}>
      test
    </div>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
