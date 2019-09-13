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
    </div>
  );
};

const wrapperStyle = () => {
  return { marginRight: "auto", display: "block" };
};

ProfilePicture.defaultProps = {
  profileImage: ProfileImage,
  profileName: "Jane",
  width: "80px",
  height: "80px",
  textColor: "white",
  wrapperStyle: wrapperStyle()
};

export default ProfilePicture;
