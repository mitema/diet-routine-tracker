import React from "react";

const RoundedButton = () => {
  return (
    <a className="btn-floating btn-large waves-effect waves-light red">test</a>
  );
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
