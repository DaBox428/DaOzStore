import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Posters</span>
          <span>Shadow Boxes</span>
          <span>3d Models</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>Faq</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo"></div>
          <div className="copyright"></div>
        </div>
        <div className="right">
          <div className="paymentImage"></div>
        </div>
      </div>
    </div>
  );
}
