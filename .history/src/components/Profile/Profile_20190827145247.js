import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";

const Profile = props => {
  return (
    <div className={props.className}>
      <ProfilePicture />
    </div>
  );
};

export default Profile;
