import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    state = {
        active: false,
        close: false,
        selected: "",
    };
    render() {
        return (
            <nav className="navigation">
                <Link
                    onClick={() => {
                        window.scrollTo(0, 0);
                        this.setState({
                            active: false,
                            close: true,
                            selected: "",
                        });
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
                    className={
                        !this.state.active ? "hamburger" : "hamburger_open"
                    }
                >
                    <span
                        className={
                            !this.state.active
                                ? "hamburger-one"
                                : "hamburger-one_open"
                        }
                    ></span>
                    <span
                        className={
                            !this.state.active
                                ? "hamburger-two"
                                : "hamburger-two_open"
                        }
                    ></span>
                    <span
                        className={
                            !this.state.active
                                ? "hamburger-three"
                                : "hamburger-three_open"
                        }
                    ></span>
                </div>
                <div
                    className={
                        !this.state.active
                            ? `navigation-hamburger ${
                                  this.state.close
                                      ? "navigation-hamburger_close"
                                      : ""
                              }`
                            : "navigation-hamburger_active"
                    }
                >
                    <a
                        href="#projects"
                        className="navigation-hamburger_projects"
                    >
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
        );
    }
}
