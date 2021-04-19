import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
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
                    <a href="mailto:team@therusticdude.com">
                        team@therusticdude.com
                    </a>
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
    );
}
