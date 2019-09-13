import React, { useState } from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div className="card">
      <img
        src={props.profileImage}
        alt="Not Found"
        className="round-img"
        style={{ width: "56px" }}
      />
      {props.profileName}
    </div>
  );
};
ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane"
};

export default ProfilePicture;
