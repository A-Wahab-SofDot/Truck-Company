import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/PagesHeader";
import SideBar from "../../Components/PagesSideBar";
import Account from "./Components/Account";
import Jobs from "./Components/Jobs";
import PostJob from "./Components/PostJob";
import PaymentSubmit from "./Components/PaymentSubmit";
import PaymentMethod from "./Components/PaymentMethod";
import Advertisement from "./Components/Advertisement";
import JobsApplied from "./Components/JobsApplied";
import "./Components/TruckPage.css";

export default function TruckPage() {
  const [active, setHandleActive] = useState(false);
  const itemsData = [
    {
      img: "/images/driverIcon1.svg",
      img1: "/images/driverIcon1.svg",
      name: "My account",
      link: "/truck/account",
    },
    {
      img: "/images/driverIcon2.svg",
      img1: "/images/driverIcon2.svg",
      name: "Jobs",
      link: "/truck/job",
    },
    {
      img: "/images/featureIcon.svg",
      img1: "/images/featureIcon.svg",
      name: "Feature advertisements",
      link: "/truck/advertisement",
    },
  ];
  const fourthItem = {
    name: "Online payments",
    img: "/images/creditCard.svg",
    img1: "/images/creditCard.svg",
    arrowD: "/images/arrowWD.svg",
    arrowU: "/images/arrowUp.svg",
    item1: "Payment method",
    item2: "Submit a query",
    item1L: "/truck/paymentmethod",
    item2L: "/truck/paymentsubmit",
  };
  return (
    <>
      <div className="dashboardMainDiv">
        <div>
          <SideBar
            itemsData={itemsData}
            fourth={fourthItem}
            name="Truck Company"
            email="company@email.com"
            active={active}
            setHandleActive={setHandleActive}
          />
        </div>
        <div className="headerSec">
          <Header active={active} setHandleActive={setHandleActive} />
          <div className="contentMainSec">
            <div className="roundBorder">
              <Switch>
                <Route path="/truck" exact component={Account}></Route>
                <Route path="/truck/account" exact component={Account}></Route>
                <Route path="/truck/job" exact component={Jobs}></Route>
                <Route path="/truck/job/posted" component={Jobs}></Route>
                <Route
                  path="/truck/job/applied"
                  component={JobsApplied}
                ></Route>
                <Route path="/truck/postjob" component={PostJob}></Route>
                <Route
                  path="/truck/paymentsubmit"
                  component={PaymentSubmit}
                ></Route>
                <Route
                  path="/truck/paymentmethod"
                  component={PaymentMethod}
                ></Route>
                <Route
                  path="/truck/advertisement"
                  component={Advertisement}
                ></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
