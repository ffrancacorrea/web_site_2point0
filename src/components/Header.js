import React, { Component } from 'react';
import gitLogo from "../logo/git-logo.png";
import gmailLogo from "../logo/gmail-logo.png";
import linkedinLogo from "../logo/linkedin-logo.png";

export class Header extends Component {
    render() {
        return (
        <div className="header">
        <header>
          <nav>
            <ul className="nav__links">
              <li>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="banner">
          <div className="banner__image">
            <div className="banner_s_title">
            <h1 className="banner__title">F E R N A N D A</h1>
            </div>
            <p className="banner__text banner__text_one">I'm a recently graduated Full stack developer</p>
            <p className="banner__text banner__text_two">Born in Santos, located in Paris</p>
            <p className="banner__text banner__text_three">Currently available</p>
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
        </div>
      </div>
        )
    }
}

export default Header;
