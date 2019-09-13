import React, { useState } from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel grey lighten-5 z-depth-1">
        <div class="row valign-wrapper">
          <div class="col s2">
            <img
              src={props.profileImage}
              alt=""
              class="circle responsive-img"
            />
          </div>
          <div class="col s10">
            <span class="black-text">{props.profileName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane"
};

export default ProfilePicture;
