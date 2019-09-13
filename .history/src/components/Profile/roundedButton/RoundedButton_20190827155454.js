import React from "react";

const RoundedButton = () => {
  return (
    <a
      className="btn-floating btn-large waves-effect waves-light red round-button fixed"
      style={{ width: "56px" }}
    >
      test
    </a>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
