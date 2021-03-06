import React, { useState } from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div>
      <div class="col s10">
        <img src={props.profileImage} alt="" class="circle responsive-img" />
      </div>
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
