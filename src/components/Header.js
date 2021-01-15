import React, { Component } from 'react';
import gitLogo from "../logo/git-logo.png";
import gmailLogo from "../logo/gmail-logo.png";
import linkedinLogo from "../logo/linkedin-logo.png";
import AOS from 'aos';
import "aos/dist/aos.css";

export class Header extends Component {

  componentDidMount() {
    AOS.init({
        disable:'mobile',
        duration : 2200,
        offset: 300
      });
  }
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
            <h1 className="banner__title" data-aos="fade-left">F E R N A N D A</h1>
            <p className="banner__text banner__text_one" data-aos="fade-up">I'm a recently graduated Full stack developer</p>
            <p className="banner__text banner__text_two" data-aos="fade-up">Born in Santos, located in Paris</p>
            <p className="banner__text banner__text_three" data-aos="fade-up">Currently available</p>
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
