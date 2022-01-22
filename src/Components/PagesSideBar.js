import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
function SideBar(props) {
  const { location, active, setHandleActive } = props;

  const [renderLoginPage, setrenderLoginPage] = useState(true);

  const [dropFourth, setDropFourth] = useState(false);

  const itemsData = props.itemsData;

  const fourth = props.fourth;

  // getting active path

  const [activeItem, setAactiveItem] = useState("Dashboard");
  return (
    <>
      {renderLoginPage && (
        <>
          {" "}
          <div className="sideBar sideBarDiv d-none d-md-block">
            <div className="logoSideBar">
              <Link to="/">
                <img src="/images/logo.svg"></img>
              </Link>
            </div>
            <div className="userImage">
              <img src="/images/userImage.svg"></img>
              <div className="content">
                <div className="name">{props.name}</div>
                <div className="email">{props.email}</div>
              </div>
            </div>

            <div className="itemsFlex">
              <div className="w-100">
                {itemsData.map((item, index) => {
                  return (
                    <Link to={item.link}>
                      <div
                        // onClick={() => setAactiveItem(item.name)}
                        key={index}
                        className={
                          activeItem === item.name
                            ? "sideBarItem sideBarItemActive"
                            : "sideBarItem"
                        }
                      >
                        <div className="circleIcon">
                          <img
                            src={
                              activeItem === item.name ? item.img : item.img1
                            }
                            className="icon"
                          ></img>
                        </div>
                        <div className="title">{item.name}</div>
                      </div>
                    </Link>
                  );
                })}

                {/* fourth Item */}

                {fourth && (
                  <>
                    <div
                      onClick={() => setDropFourth(!dropFourth)}
                      className={
                        activeItem === fourth.name
                          ? "sideBarItem sideBarItemActive cursorP"
                          : "sideBarItem cursorP"
                      }
                    >
                      <div className="circleIcon" style={{ marginLeft: "2px" }}>
                        <img
                          src={
                            activeItem === fourth.name
                              ? fourth.img
                              : fourth.img1
                          }
                          className="icon"
                        ></img>
                      </div>
                      <div className="fTitle">
                        <div className="heading">{fourth.name}</div>
                        <img src={fourth.arrowD} alt="arrowdown" />
                      </div>
                    </div>

                    {/* fourth drop down items */}

                    {dropFourth && (
                      <>
                        <Link to={fourth.item1L}>
                          <div
                            className={
                              activeItem === fourth.name
                                ? "sideBarItem sideBarItemActive"
                                : "sideBarItem"
                            }
                            style={{ display: "flex", width: "200px" }}
                          >
                            <div
                              className="title"
                              style={{ paddingTop: 0, marginBottom: 0 }}
                            >
                              {fourth.item1}
                            </div>
                          </div>
                        </Link>
                        <Link to={fourth.item2L}>
                          <div
                            className={
                              activeItem === fourth.name
                                ? "sideBarItem sideBarItemActive"
                                : "sideBarItem"
                            }
                            style={{ display: "flex", width: "200px" }}
                          >
                            <div
                              className="title"
                              style={{ paddingTop: 0, marginBottom: 0 }}
                            >
                              {fourth.item2}
                            </div>
                          </div>
                        </Link>
                      </>
                    )}

                    {/* fourth drop down items END */}
                  </>
                )}

                {/* fourth Item END */}
              </div>
              <div className="w-100 ">
                {props.faqs && (
                  <>
                    <Link to="/driver/faqs">
                      <div
                        // onClick={() => setAactiveItem("Settings")}
                        className={
                          activeItem === "Settings"
                            ? "sideBarItem sideBarItemActive"
                            : "sideBarItem"
                        }
                      >
                        <div className="circleIcon">
                          <img
                            src={
                              activeItem === "Settings"
                                ? "/images/help.svg"
                                : "/images/help.svg"
                            }
                            className="icon"
                          ></img>
                        </div>
                        <div className="title">FAQs</div>
                      </div>
                    </Link>
                  </>
                )}
                <div className="sideBarItem">
                  <div className="circleIcon">
                    <img src="/images/logout.svg" className="icon"></img>
                  </div>
                  <div className="title">Logout</div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile Side Bar */}
          <div className="d-block d-md-none">
            <div
              onClick={() => setHandleActive(false)}
              className={
                active ? "sideBarModal sideBarModalActive" : "sideBarModal"
              }
            ></div>
            <div
              className={
                active
                  ? "sideBarM sideBarDiv sideBarMActive"
                  : "sideBarM sideBarDiv"
              }
            >
              <div className="logoSideBar">
                <img src="/images/logo.svg"></img>
              </div>
              <div className="userImage">
                <img src="/images/userImage.svg"></img>
                <div className="content">
                  <div className="name">{props.name}</div>
                  <div className="email">{props.email}</div>
                </div>
              </div>

              <div className="itemsFlex">
                <div className="w-100">
                  {itemsData.map((item, index) => {
                    return (
                      <Link to={item.link}>
                        <div
                          onClick={() => setAactiveItem(item.name)}
                          key={index}
                          className={
                            activeItem === item.name
                              ? "sideBarItem sideBarItemActive"
                              : "sideBarItem"
                          }
                        >
                          <div className="circleIcon">
                            <img
                              src={
                                activeItem === item.name ? item.img : item.img1
                              }
                              className="icon"
                            ></img>
                          </div>
                          <div className="title">{item.name}</div>
                        </div>
                      </Link>
                    );
                  })}
                  {/* fourth Item */}

                  {fourth && (
                    <>
                      <div
                        style={{ marginBottom: 0 }}
                        onClick={() => setDropFourth(!dropFourth)}
                        className={
                          activeItem === fourth.name
                            ? "sideBarItem sideBarItemActive cursorP"
                            : "sideBarItem cursorP"
                        }
                      >
                        <div
                          className="circleIcon"
                          style={{ marginLeft: "2px" }}
                        >
                          <img
                            src={
                              activeItem === fourth.name
                                ? fourth.img
                                : fourth.img1
                            }
                            className="icon"
                          ></img>
                        </div>
                        <div className="fTitle">
                          <div className="heading">{fourth.name}</div>
                          <img src={fourth.arrowD} alt="arrowdown" />
                        </div>
                      </div>

                      {/* fourth drop down items */}

                      {dropFourth && (
                        <>
                          <Link to={fourth.item1L}>
                            <div
                              className={
                                activeItem === fourth.name
                                  ? "sideBarItem sideBarItemActive"
                                  : "sideBarItem"
                              }
                              style={{
                                display: "flex",
                                width: "200px",
                                paddingTop: 0,
                                paddingBottom: "2px",
                              }}
                            >
                              <div
                                className="title"
                                style={{ paddingTop: 0, marginBottom: 0 }}
                              >
                                {fourth.item1}
                              </div>
                            </div>
                          </Link>
                          <Link to={fourth.item2L}>
                            <div
                              className={
                                activeItem === fourth.name
                                  ? "sideBarItem sideBarItemActive"
                                  : "sideBarItem"
                              }
                              style={{
                                display: "flex",
                                width: "200px",
                                paddingTop: 0,
                                paddingBottom: "2px",
                              }}
                            >
                              <div
                                className="title"
                                style={{ paddingTop: 0, marginBottom: 0 }}
                              >
                                {fourth.item2}
                              </div>
                            </div>
                          </Link>
                        </>
                      )}

                      {/* fourth drop down items END */}
                    </>
                  )}

                  {/* fourth Item END */}
                </div>
                <div className="w-100 ">
                  {props.faqs && (
                    <>
                      <Link to="/driver/faqs">
                        <div
                          // onClick={() => setAactiveItem("Settings")}
                          className={
                            activeItem === "Settings"
                              ? "sideBarItem sideBarItemActive"
                              : "sideBarItem"
                          }
                        >
                          <div className="circleIcon">
                            <img
                              src={
                                activeItem === "Settings"
                                  ? "/images/help.svg"
                                  : "/images/help.svg"
                              }
                              className="icon"
                            ></img>
                          </div>
                          <div className="title">FAQs</div>
                        </div>
                      </Link>
                    </>
                  )}
                  <div className="sideBarItem">
                    <div className="circleIcon">
                      <img src="/images/logout.svg" className="icon"></img>
                    </div>
                    <div className="title">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}
export default withRouter(SideBar);
