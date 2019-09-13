import React from "react";

const ProfileName = props => {
  return (
    <div className="col s10 profile-text-container">
      <div
        className="profile-text"
        style={{
          marginLeft: "0.5rem",
          fontWeight: "500",
          fontSize: "20px",
          color: props.color
        }}
      >
        Jane
      </div>
    </div>
  );
};

ProfileName.defaultProps = {
  color: "white"
};

export default ProfileName;
