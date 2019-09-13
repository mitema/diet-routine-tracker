import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";

const Profile = props => {
  return (
    <div className={props.className}>
      <ul class="collection">
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
      </ul>
      <div className="profile-section-container">
        <div className="profile-section">
          <ProfilePicture />
          <div className="round-buttons" style={{ display: "flex" }}>
            <RoundedButton />
            <RoundedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
