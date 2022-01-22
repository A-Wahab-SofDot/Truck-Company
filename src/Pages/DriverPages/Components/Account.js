import React from "react";

export default function Account() {
  const DATA = {
    name: "John Doe",
    phone: "+00 36 589 6589",
    email: "company@email.com",
    password: "***********",
  };
  return (
    <div>
      <div className="driverAccount">
        <div className="banner">
          <img className="bannerPic" src="/images/banner.svg" alt="banner" />
          <img
            className="profilePic"
            src="/images/profilePic.svg"
            alt="ProfilePic"
          />
        </div>
        <div className="bio">
          <div className="info">
            <div className="infoSections">
              <div className="heading">Name</div>
              <div className="title">{DATA.name}</div>
            </div>
            <div className="infoSections">
              <div className="heading">Phone number</div>
              <div className="title">{DATA.phone}</div>
            </div>
          </div>
          <div className="info">
            <div className="infoSections">
              <div className="heading">Password</div>
              <div className="title">{DATA.password}</div>
            </div>
            <div className="infoSections">
              <div className="heading">Email address</div>
              <div className="title">{DATA.email}</div>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
