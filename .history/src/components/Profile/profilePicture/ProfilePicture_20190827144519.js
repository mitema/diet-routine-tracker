import React, { useState } from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div>
      <img src={props.profileImage} alt="" class="circle responsive-img" />

      <div class="col s10">
        <span class="black-text">{props.profileName}</span>
      </div>
    </div>
  );
};
ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane"
};

export default ProfilePicture;
