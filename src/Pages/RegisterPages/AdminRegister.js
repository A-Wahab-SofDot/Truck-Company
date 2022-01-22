import React from "react";
import LoginPanel from "../LoginPage/Components/loginPanel";
import RegisterPanel from "./Components/RegisterPanel";
import "./Components/RegisterPanel.css";

export default function AdminRegister() {
  return (
    <>
      <div className="RegisterPage">
        <RegisterPanel
          title="Admin Login"
          mainWidth={{ width: "50%" }}
          login="/login"
          register="/admin"
        />
        <LoginPanel
          PanelAttributes={{ width: "50%", backgroundColor: "#C9F8FF" }}
          marginLogo={{ marginTop: "240px" }}
          logoB="/images/driverLogoB.svg"
          logoBH={{ height: "170px" }}
          logoS="/images/driverLogoS.svg"
          title="Admin"
          headingStyle={{ fontSize: "72px" }}
        />
      </div>
    </>
  );
}
