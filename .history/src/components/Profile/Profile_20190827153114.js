import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";

const Profile = props => {
  return (
    <div className={props.className}>
      <div className="profile-section">
        <ProfilePicture />
        <RoundedButton />
        <RoundedButton />
      </div>
    </div>
  );
};

export default Profile;
