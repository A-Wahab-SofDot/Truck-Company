import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

function Header(props) {
  const [renderLoginPage, setrenderLoginPage] = useState(true);
  const [txtTitle, setTxtTitle] = useState("My account");

  const [spanTxt, setSpanTxt] = useState("");

  const [bSpanTxt, setBSpanTxt] = useState("");

  const [propsText, setPropText] = useState(false);

  const { location, active, setHandleActive } = props;
  const path = location.pathname;
  useEffect(() => {
    if (path === "/driver/account") {
      setTxtTitle("My account");
    } else if (path === "/driver/jobs") {
      setTxtTitle("Applied jobs");
    } else if (path === "/driver/contact") {
      setTxtTitle("Contact us");
    } else if (path === "/driver/faqs") {
      setTxtTitle("FAQs");
    } else if (path === "/admin/dashboard") {
      setTxtTitle("Dashboard");
    } else if (path === "/admin/account") {
      setTxtTitle("My account");
    } else if (path === "/admin/text") {
      setBSpanTxt("CMS - Add/remove ");
      setTxtTitle("");
      setSpanTxt("Text");
      setPropText(true);
    } else if (path === "/admin/image") {
      setBSpanTxt("CMS - Add/remove ");
      setTxtTitle("");
      setSpanTxt("Images");
      setPropText(true);
    } else if (path === "/driver") {
      setTxtTitle("My account");
    } else if (path === "/admin") {
      setTxtTitle("Dashboard");
    } else if (path === "/truck") {
      setTxtTitle("My Account");
    } else if (path === "/truck/account") {
      setTxtTitle("My Account");
    } else if (path === "/truck/job") {
      setTxtTitle("Jobs");
    } else if (path === "/truck/job/posted") {
      setTxtTitle("Jobs");
    } else if (path === "/truck/job/applied") {
      setTxtTitle("Jobs");
    } else if (path === "/truck/postjob") {
      setBSpanTxt("Jobs - post new ");
      setTxtTitle("");
      setSpanTxt("Job");
      setPropText(true);
    } else if (path === "/truck/paymentsubmit") {
      setBSpanTxt("Online payments - Submit a ");
      setTxtTitle("");
      setSpanTxt("Query");
      setPropText(true);
    } else if (path === "/truck/paymentmethod") {
      setBSpanTxt("Payment ");
      setTxtTitle("");
      setSpanTxt("Method");
      setPropText(true);
    } else if (path === "/truck/advertisement") {
      setBSpanTxt("Feature ");
      setTxtTitle("");
      setSpanTxt("Advertisements");
      setPropText(true);
    }
    return () => {
      setTxtTitle("My account");
      setPropText(false);
    };
  }, [path]);

  useEffect(() => {
    if (
      path === "/driver/account" ||
      path === "/driver/jobs" ||
      path === "/driver/contact" ||
      path === "/driver/faqs" ||
      path === "/driver" ||
      path === "/admin/dashboard" ||
      path === "/admin/account" ||
      path === "/admin/text" ||
      path === "/admin/image" ||
      path === "/admin" ||
      path === "/truck/account" ||
      path === "/truck/job" ||
      path === "/truck/postjob" ||
      path === "/truck/paymentsubmit" ||
      path === "/truck/paymentmethod" ||
      path === "/truck/advertisement" ||
      path === "/truck" ||
      path === "/truck/job/posted" ||
      path === "/truck/job/applied"
    ) {
      setrenderLoginPage(true);
    }
    return () => {
      setrenderLoginPage(false);
    };
  }, [path]);

  return (
    <>
      {renderLoginPage && (
        <div>
          <nav class="flexBetweenCenter navBar ">
            {/* SideBarButton */}
            <div className="d-inline d-md-none">
              <div
                onClick={() => setHandleActive(!active)}
                className={
                  active ? " navaBarButton activeSideBar " : "navaBarButton"
                }
              >
                <div className="navBarLine navBarLine1"></div>
                <div className="navBarLine navBarLine2"></div>
                <div className="navBarLine navBarLine3"></div>
              </div>
            </div>
            <a class="navBrand">
              {txtTitle}
              {propsText && (
                <>
                  <span className="d-none d-sm-inline">{bSpanTxt}</span>
                  {spanTxt}
                </>
              )}
            </a>

            <div className="flexCenter navIcons">
              <Link to="/login">
                <img src="/images/bell.svg" className="icon" alt="bell"></img>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
export default withRouter(Header);
