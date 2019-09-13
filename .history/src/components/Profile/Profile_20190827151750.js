import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";

const Profile = props => {
  return (
    <div className={props.className}>
      <ProfilePicture />
      <RoundedButton />
    </div>
  );
};

export default Profile;
