import React from "react";
import LoginPanel from "./Components/loginPanel";

export default function LoginPage() {
  const DATA = [
    {
      logoB: "/images/adminLogoB.svg",
      logoS: "/images/adminLogoS.svg",
      title: "Admin",
      width: "33.33%",
      color: "#C9F8FF",
      link: "/admin",
      registerLink: "/register/admin",
      headingFontSize: "48px",
      buttonColor: "#00CAEA",
    },
    {
      logoB: "/images/driverLogoB.svg",
      logoS: "/images/driverLogoS.svg",
      title: "Driver",
      width: "33.33%",
      color: "#D0EAF1",
      link: "/driver",
      registerLink: "/register/driver",
      headingFontSize: "48px",
      buttonColor: "#0F71BA",
    },
    {
      logoB: "/images/truckLogoB.svg",
      logoS: "/images/truckLogoS.svg",
      title: "Trucking Company",
      width: "33.33%",
      color: "#D0CFDD",
      link: "/truck",
      registerLink: "/register/truck",
      headingFontSize: "48px",
      buttonColor: "#150E56",
    },
  ];

  return (
    <>
      <div className="loginPage">
        <img className="mainLogo" src="/images/logo.svg" alt="logo" />
        <div className="mainHeading">Choose your role</div>
        {DATA.map((item, index) => {
          return (
            <LoginPanel
              key={index}
              PanelAttributes={{
                width: item.width,
                backgroundColor: item.color,
              }}
              logoB={item.logoB}
              logoBH={{ height: "140px" }}
              logoS={item.logoS}
              title={item.title}
              headingStyle={{
                fontSize: item.headingFontSize,
              }}
              marginLogo={{ marginTop: "191px" }}
              buttonColor={{ backgroundColor: item.buttonColor }}
              extra={true}
              link={item.link}
              registerLink={item.registerLink}
            />
          );
        })}
      </div>
    </>
  );
}
