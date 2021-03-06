import React, { useState } from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div className="row valign-wrapper">
      <div>
        <img
          src={props.profileImage}
          alt=""
          className="circle responsive-img"
          width="120px"
        />
      </div>
      <div className="col s10">
        <span className="black-text">{props.profileName}</span>
      </div>
    </div>
  );
};
ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane"
};

export default ProfilePicture;
