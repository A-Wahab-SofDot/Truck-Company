import React, { useState } from "react";
import HeaderSideBar from "./HeaderSideBar";
import { withRouter, Link } from "react-router-dom";
function Header(props) {
  // sideBar state
  const [active, setHandleActive] = useState(false);
  // path name value

  //   close sideBar
  const closeSideBar = () => {
    setHandleActive(false);
  };

  //   main return
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-navColor">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.svg" className="logo" alt="logo"></img>
        </Link>
        {/* HeaderSideBar Component*/}
        <div className=" d-inline d-md-none">
          <HeaderSideBar activeSideBar={active} closeSideBar={closeSideBar} />
        </div>

        {/* SideBarButton */}
        <div className="d-inline d-md-none">
          <div
            onClick={() => setHandleActive(!active)}
            className={
              active ? " navaBarButton activeSideBar " : "navaBarButton"
            }
          >
            <div className="navBarLine navBarLine1"></div>
            <div className="navBarLine navBarLine2"></div>
            <div className="navBarLine navBarLine3"></div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="loginBtnDiv">
            <Link to="/login">
              <button className=" btnLogin" type="button">
                Login
              </button>
            </Link>
          </div>
          <div className="loginBtnDiv">
            <Link to="/register/admin">
              <button className=" btnLogin" type="button">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default withRouter(Header);
