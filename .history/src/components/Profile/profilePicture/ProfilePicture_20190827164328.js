import React, { useState } from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div
      className="valign-wrapper profile-picture"
      style={{ marginRight: "auto" }}
    >
      <div>
        <img
          src={props.profileImage}
          alt=""
          className="circle responsive-img"
          width="56px"
          height="56px"
        />
      </div>
      <div className="col s10">
        <span
          className="white-text"
          style={{ marginLeft: "0.2rem", fontWeight: "bold", color: "white" }}
        >
          {props.profileName}
        </span>
      </div>
    </div>
  );
};
ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane"
};

export default ProfilePicture;
