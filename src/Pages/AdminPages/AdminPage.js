import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/PagesHeader";
import SideBar from "../../Components/PagesSideBar";
import Dashboard from "./Components/Dashboard";
import Account from "./Components/Account";
import CmsText from "./Components/CmsText";
import CmsImage from "./Components/CmsImage";
import "./Components/AdminPage.css";

export default function AdminPage() {
  const [active, setHandleActive] = useState(false);
  const itemsData = [
    {
      img: "/images/dashboard.svg",
      img1: "/images/dashboard.svg",
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      img: "/images/driverIcon1.svg",
      img1: "/images/driverIcon1.svg",
      name: "My account",
      link: "/admin/account",
    },
  ];
  const fourthItem = {
    name: "CMS",
    img: "/images/creditCard.svg",
    img1: "/images/creditCard.svg",
    arrowD: "/images/arrowWD.svg",
    arrowU: "/images/arrowUp.svg",
    item1: "Add/remove text",
    item2: "Add/remove images",
    item1L: "/admin/text",
    item2L: "/admin/image",
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
                <Route path="/admin" exact component={Dashboard}></Route>
                <Route path="/admin/dashboard" component={Dashboard}></Route>
                <Route path="/admin/account" component={Account}></Route>
                <Route path="/admin/text" component={CmsText}></Route>
                <Route path="/admin/image" component={CmsImage}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
