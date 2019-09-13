import React from "react";

const RoundedButton = () => {
  return (
    <a className="btn-large waves-effect waves-light red"></a>;
  ) 
};

RoundedButton.defaultProps = {
  height: { value: "57", unit: "kg" },
  weight: { value: "163", unit: "cm" }
};
export default RoundedButton;
