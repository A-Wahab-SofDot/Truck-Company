import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/PagesHeader";
import SideBar from "../../Components/PagesSideBar";
import Account from "./Components/Account";
import Jobs from "./Components/Jobs";
import Contact from "./Components/Contact";
import Faqs from "./Components/Faqs";
import "./Components/DriverPage.css";

export default function DriverPage() {
  const [active, setHandleActive] = useState(false);
  const itemsData = [
    {
      img: "/images/driverIcon1.svg",
      img1: "/images/driverIcon1.svg",
      name: "My account",
      link: "/driver/account",
    },
    {
      img: "/images/driverIcon2.svg",
      img1: "/images/driverIcon2.svg",
      name: "Applied jobs",
      link: "/driver/jobs",
    },
    {
      img: "/images/driverIcon3.svg",
      img1: "/images/driverIcon3.svg",
      name: "Contact Us",
      link: "/driver/contact",
    },
  ];
  return (
    <>
      <div className="dashboardMainDiv">
        <div>
          <SideBar
            itemsData={itemsData}
            name="John Doe"
            email="driver@email.com"
            active={active}
            setHandleActive={setHandleActive}
            faqs={true}
          />
        </div>
        <div className="headerSec">
          <Header active={active} setHandleActive={setHandleActive} />
          <div className="contentMainSec">
            <div className="roundBorder">
              <Switch>
                <Route path="/driver" exact component={Account}></Route>
                <Route path="/driver/account" component={Account}></Route>
                <Route path="/driver/jobs" component={Jobs}></Route>
                <Route path="/driver/contact" component={Contact}></Route>
                <Route path="/driver/faqs" component={Faqs}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
