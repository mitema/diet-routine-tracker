import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";

const Profile = props => {
  return (
    <div className={props.className}>
      <div className="profile-section-container">
        <div className="profile-section">
          <ProfilePicture />
          <div className="round-buttons" style={{ display: "flex" }}>
            <RoundedButton value={57} unit={"kg"} />
            <RoundedButton value={163} unit={"cm"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
