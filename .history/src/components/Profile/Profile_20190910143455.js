import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";
import DietDetails from "../dietDetails/DietDetails";

const Profile = props => {
  return (
    <div className={props.className}>
      <div className="profile-section-container">
        <div className="profile-section-sm">
          <ProfilePicture wrapperStyle={wrapperStyleSmallScreen()} />
          <div className="round-buttons" style={{ display: "flex" }}>
            <RoundedButton value={57} unit={"kg"} />
            <RoundedButton value={163} unit={"cm"} />
          </div>
        </div>
        <div className="profile-section-lg">
          <RoundedButton value={57} unit={"kg"} />
          <ProfilePicture wrapperStyle={wrapperStyle()} width="80px" />
          <RoundedButton value={163} unit={"cm"} />
          <DietDetails />
        </div>
      </div>
    </div>
  );
};
const wrapperStyleSmallScreen = () => {
  return { display: "flex" };
};
const wrapperStyle = () => {
  return { display: "block" };
};

export default Profile;
