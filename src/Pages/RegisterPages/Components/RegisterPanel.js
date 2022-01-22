import React from "react";

export default function RegisterPanel(props) {
  return (
    <>
      <div className="registerPanel" style={props.mainWidth}>
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <div className="heading">{props.title}</div>
        <div className="welcome">
          Welcome here! Let us help you<br></br>signing up.
        </div>
        <div className="registerForm">
          <div className="inputField">
            <input className="input" type="text" placeholder="Full name" />
            <input className="input" type="text" placeholder="Full name" />
          </div>
          <div className="inputField">
            <input className="emailField" type="text" placeholder="Full name" />
          </div>
          <div className="inputField">
            <input className="input" type="text" placeholder="Full name" />
            <input className="input" type="text" placeholder="Full name" />
          </div>
        </div>
        <div className="panelIcon">
          <div className="iconContainer blue">
            <img src="/images/facebookW.svg" alt="facebook" />
          </div>
          <div className="iconContainer red">
            <img src="/images/googleW.svg" alt="google" />
          </div>
        </div>
        <button>Register</button>
        <div className="notification">Already have an account?</div>
        <div className="loginPath">Login</div>
      </div>
    </>
  );
}
