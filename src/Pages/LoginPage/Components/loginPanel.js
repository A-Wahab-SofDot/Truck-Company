import React from "react";
import { Link } from "react-router-dom";

export default function loginPanel(props) {
  return (
    <>
      <div className="panelDesign" style={props.PanelAttributes}>
        <div className="panelContainer" style={props.marginLogo}>
          <div className="logoContainer">
            <img src={props.logoB} style={props.logoBH} alt="logo" />
            <img className="logoS" src={props.logoS} alt="logo" />
          </div>
          <div className="heading" style={props.headingStyle}>
            {props.title}
          </div>
          {props.extra && (
            <>
              <Link to={props.link}>
                <button style={props.buttonColor}>Login</button>
              </Link>
              <div className="notification">Don’t have an account?</div>
              <Link to={props.registerLink}>
                <div className="register">Register</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
