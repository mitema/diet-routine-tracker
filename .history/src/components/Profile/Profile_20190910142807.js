import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";
import DietDetails from "../dietDetails/DietDetails";

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
        <div>
          <RoundedButton value={57} unit={"kg"} />
          <ProfilePicture wrapperStyle={wrapperStyle} />
          <RoundedButton value={163} unit={"cm"} />
          <DietDetails />
        </div>
      </div>
    </div>
  );
};

const wrapperStyle = () => {
  return { display: "flex" };
};

export default Profile;
