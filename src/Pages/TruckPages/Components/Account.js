import React from "react";

export default function Account() {
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
              <div className="title">John Doe</div>
            </div>
            <div className="infoSections">
              <div className="heading">Email address</div>
              <div className="title">company@email.com</div>
            </div>
            <div className="infoSections">
              <div className="heading">Password</div>
              <div className="title">***********</div>
            </div>
          </div>
          <div className="about">
            <div className="heading">About Us</div>
            <div className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque morbi in quis rhoncus elementum. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Pellentesque morbi in
              consectetur adipiscing elit. Pellentesque. dolor sit amet,
              consectetur adipiscing elit. Pellentesque morbi in quis rhoncus
              elementum.
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
