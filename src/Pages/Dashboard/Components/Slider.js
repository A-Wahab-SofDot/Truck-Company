import React from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
      <div className="header-padding"></div>
      <div className="slider-container">
        <div className="content">
          <h2 className="heading">Your career starts here!</h2>
          <div className="career">
            <Link to="/register/driver">
              <div className="driver">
                <img src="/images/driver.svg" alt="driver" />
                <h5 className="heading">Driver</h5>
              </div>
            </Link>
            <Link to="/register/truck">
              <div className="truck">
                <img src="/images/truck.svg" alt="truck" />
                <h5 className="heading">Truck Company</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
