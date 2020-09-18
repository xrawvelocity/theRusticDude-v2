import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Admin from "./components/Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default class App extends Component {
  state = {
    active: false,
    close: false,
    selected: "",
  };

  render() {
    return (
      <Fragment>
        <nav className="navigation">
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
              this.setState({ active: false, close: true, selected: "" });
            }}
            to="/"
            className="navigation-logo"
          >
            <img
              className="navigation-logo_image"
              src="./images/theRusticDudeLogoImage.png"
              alt="logo"
            />
            <img
              className="navigation-logo_text"
              src="./images/theRusticDudeLogoText.png"
              alt="logo"
            />
          </Link>
          <div className="navigation-links">
            <a href="#projects" className="navigation-links_projects">
              Projects
            </a>

            <a href="#faq" className="navigation-links_FAQ">
              FAQ
            </a>
            <a href="#contact" className="navigation-links_contact">
              Contact
            </a>
          </div>
          <div
            onClick={async () => {
              await this.setState({
                active: !this.state.active,
                close: this.state.active ? true : false,
              });
            }}
            className={!this.state.active ? "hamburger" : "hamburger_open"}
          >
            <span
              className={
                !this.state.active ? "hamburger-one" : "hamburger-one_open"
              }
            ></span>
            <span
              className={
                !this.state.active ? "hamburger-two" : "hamburger-two_open"
              }
            ></span>
            <span
              className={
                !this.state.active ? "hamburger-three" : "hamburger-three_open"
              }
            ></span>
          </div>
          <div
            className={
              !this.state.active
                ? `navigation-hamburger ${
                    this.state.close ? "navigation-hamburger_close" : ""
                  }`
                : "navigation-hamburger_active"
            }
          >
            <a href="#projects" className="navigation-hamburger_projects">
              Projects
            </a>
            <a href="#contact" className="navigation-hamburger_contact">
              Contact
            </a>
            <a href="#faq" className="navigation-hamburger_FAQ">
              FAQ
            </a>
          </div>
        </nav>
        <Home />
        <footer className="footer">
          <div className="footer-links">
            <a
              href="https://www.facebook.com/theRusticDude/"
              className="footer-links_facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/therusticdude/"
              className="footer-links_instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://offerup.co/SVwgvyaK86"
              className="footer-links_offerup"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="footer-links_offerup-image"
                src="../images/offerup.jpg"
                alt="offerup"
              />
            </a>
          </div>
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to="/"
            className="footer-logo"
          >
            <img
              className="navigation-logo_image"
              src="./images/theRusticDudeLogoImage.png"
              alt="logo"
            />
          </Link>
          <div className="footer-contact">
            <p>Phone: (305) 399-9126</p>
            <p>
              Email:{" "}
              <a href="mailto:team@therusticdude.com">team@therusticdude.com</a>
            </p>
            <p>
              Website created by &nbsp;
              <a
                href="https://www.vic-dev.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Victor
              </a>
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}
