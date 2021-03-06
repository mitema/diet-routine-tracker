import React from "react";
import ProfileImage from "../../../avatar.jpeg";
import "./ProfilePicture.css";

const ProfilePicture = props => {
  return (
    <div
      className="valign-wrapper profile-picture-container"
      style={props.wrapperStyle}
    >
      <div>
        <img
          src={props.profileImage}
          alt=""
          className="circle responsive-img"
          width={props.width}
          height={props.height}
        />
      </div>
      <div className="col s10 profile-text-container">
        <div
          className="profile-text"
          style={{
            marginLeft: "0.5rem",
            fontWeight: "500",
            fontSize: "20px",
            color: props.textColor
          }}
        >
          {props.profileName}
        </div>
      </div>
    </div>
  );
};

const wrapperStyle = () => {
  return { marginRight: "auto", display: "block" };
};

ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane",
  width: "56px",
  height: "56px",
  textColor: "white",
  wrapperStyle: wrapperStyle()
};

export default ProfilePicture;
