import React from "react";
import LoginPanel from "../LoginPage/Components/loginPanel";
import RegisterPanel from "./Components/RegisterPanel";
import "./Components/RegisterPanel.css";

export default function DriverRegister() {
  return (
    <>
      <div className="RegisterPage">
        <RegisterPanel
          login="/login"
          register="/driver"
          title="Register as a driver"
          mainWidth={{ width: "50%" }}
        />
        <LoginPanel
          PanelAttributes={{ width: "50%", backgroundColor: "#D0EAF1" }}
          marginLogo={{ marginTop: "240px" }}
          logoB="/images/driverLogoB.svg"
          logoBH={{ height: "170px" }}
          logoS="/images/driverLogoS.svg"
          title="Driver"
          headingStyle={{ fontSize: "72px" }}
        />
      </div>
    </>
  );
}
