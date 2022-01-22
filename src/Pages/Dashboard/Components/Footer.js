import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logoFlex">
          <div className="logoContainer">
            <img src="/images/logo.svg" alt="logoFooter" />
          </div>
        </div>
        <div className="footerMenu">
          <div className="menuColumn">
            <div className="heading">Menu</div>
            <div className="label">Home</div>
            <div className="label">About us</div>
            <div className="label">Get Started</div>
          </div>
          <div className="menuColumn">
            <div className="heading">Legal</div>
            <div className="label">Terms & Conditions</div>
            <div className="label">Privacy Policy</div>
            <div className="label">Cookies Policy</div>
          </div>
          <div className="menuColumn">
            <div className="heading">Contact Us</div>
            <div className="label">+351 964 300 963</div>
            <div className="label">info@truckinlin.com</div>
          </div>
          <div className="menuColumn">
            <div className="heading">About</div>
            <div className="label">Our Company</div>
            <div className="label">Our People</div>
            <div className="label">FAQ's</div>
          </div>
        </div>
        <div className="footerIcons">
          <div className="iconContainer">
            <img src="/images/facebook.svg" alt="facebook" />
          </div>
          <div className="iconContainer">
            <img src="/images/instagram.svg" alt="instagram" />
          </div>
          <div className="iconContainer">
            <img src="/images/twitter.svg" alt="twitter" />
          </div>
        </div>
        <div className="copyRight">
          <h2>©2021, Agri Marketplace - All rights Reserved</h2>
        </div>
      </div>
    </>
  );
}
