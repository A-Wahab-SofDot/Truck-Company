import React from "react";
import LoginPanel from "../LoginPage/Components/loginPanel";
import RegisterPanel from "./Components/RegisterPanel";
import "./Components/RegisterPanel.css";

export default function TruckRegister() {
  return (
    <>
      <div className="RegisterPage">
        <RegisterPanel
          login="/login"
          register="/truck"
          title="Truck Company Registration"
          mainWidth={{ width: "50%" }}
        />
        <LoginPanel
          PanelAttributes={{ width: "50%", backgroundColor: "#D0CFDD" }}
          marginLogo={{ marginTop: "240px" }}
          logoB="/images/driverLogoB.svg"
          logoBH={{ height: "170px" }}
          logoS="/images/driverLogoS.svg"
          title="Trucking Company"
          headingStyle={{ fontSize: "72px" }}
        />
      </div>
    </>
  );
}
