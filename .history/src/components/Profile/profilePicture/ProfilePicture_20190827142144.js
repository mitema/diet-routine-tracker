import React, { useState } from "react";
import Profile from "../Profile";
import PropTypes from "prop-types";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div className="card">
      <img
        src={props.ProfileImage}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      {props.profileName}
    </div>
  );
};
ProfilePicture.defaultPops = {
  profileImage: { ProfileImage },
  profileName: "Jane"
};

export default ProfilePicture;
