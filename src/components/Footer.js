import React, { Component } from "react";
import gitLogo from "../logo/git-logo.png";
import gmailLogo from "../logo/gmail-logo.png";
import linkedinLogo from "../logo/linkedin-logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="social-media-wrap">
          <div className="row logos">
            <a href="mailto:ffrancacorrea@gmail.com">
              <img src={gmailLogo} alt="" />
            </a>
            <a href="https://github.com/ffrancacorrea">
              <img src={gitLogo} alt="" />
            </a>
            <a href="https://linkedin.com/in/ffrancacorrea/">
              <img src={linkedinLogo} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-text">
          © 2021 Fernanda Corrêa. All rights reserved.
        </div>
      </div>
    );
  }
}
