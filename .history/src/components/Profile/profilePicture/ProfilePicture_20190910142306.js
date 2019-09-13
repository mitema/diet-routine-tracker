import React from "react";
import ProfileImage from "../../../avatar.jpeg";

const ProfilePicture = props => {
  return (
    <div className="valign-wrapper" style={props.wrapperStyle}>
      <div>
        <img
          src={props.profileImage}
          alt=""
          className="circle responsive-img"
          width={props.width}
          height={props.height}
        />
      </div>
      <div className="col s10">
        <span
          className="white-text"
          style={{ marginLeft: "0.5rem", fontWeight: "500", fontSize: "20px" }}
        >
          {props.profileName}
        </span>
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
  wrapperStyle: wrapperStyle()
};

export default ProfilePicture;
