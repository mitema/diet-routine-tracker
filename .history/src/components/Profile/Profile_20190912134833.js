import React from "react";
import "./Profile.css";
import ProfilePicture from "./profilePicture/ProfilePicture";
import RoundedButton from "./roundedButton/RoundedButton";
import DietDetails from "../dietDetails/DietDetails";
import ProfileName from "./profileName/ProfileName";

const Profile = props => {
  return (
    <div className={props.className}>
      <div className="profile-section-container">
        <div className="profile-section-sm">
          <div>
            <ProfilePicture
              wrapperStyle={wrapperStyleSmallScreen()}
              imgWidth="4.5rem"
            />
          </div>

          <div className="round-buttons" style={{ display: "flex" }}>
            <RoundedButton value={57} unit={"kg"} />
            <RoundedButton value={163} unit={"cm"} />
          </div>
        </div>
        <div className="profile-section-lg">
          <div className="profile-section-lg-content">
            <RoundedButton value={57} unit={"kg"} />
            <ProfilePicture
              textColor="black"
              wrapperStyle={wrapperStyle()}
              imgWidth="8rem"
            />
            <RoundedButton value={163} unit={"cm"} />
          </div>
          <div>
            <div className="col s10 profile-text-container">
              <div
                className="profile-text"
                style={{
                  marginLeft: "0.5rem",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "white"
                }}
              >
                Jane
              </div>
            </div>
          </div>
        </div>
        <div className="diet-info-container">
          <DietDetails />
        </div>
      </div>
    </div>
  );
};
const wrapperStyleSmallScreen = () => {
  return { display: "flex", marginRight: "auto" };
};
const wrapperStyle = () => {
  return {
    display: "flex",
    flexFlow: "row-wrap",
    textAlign: "center",
    marginRight: "1rem",
    marginLeft: "1rem"
  };
};

export default Profile;
