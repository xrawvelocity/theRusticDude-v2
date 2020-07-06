import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home">
        <div className="home-hero">
          <div class="scroll-down"></div>
          <video className="home-hero-video" autoPlay loop muted>
            <source src="./videos/therusticwebsite.mp4" type="video/mp4" />
          </video>
          <div className="home-hero-cta">
            <h1 className="home-hero-title">
              Custom <span>Rustic</span> Furniture
            </h1>
            <Link to="/about" class="home-hero-button">
              Learn More
            </Link>
          </div>
        </div>

        <div className="home-divisor"></div>
        <section className="home-main">
          <img src="../images/carry.jpg" alt="carry" className="home-image2" />
          <div className="home-cta">
            <div className="home-cta_text">
              There's nothing that I'm more passionate about than working with
              my hands
            </div>
            <Link to="/projects" className="home-cta_button">
              See my latest work
            </Link>
          </div>
        </section>
        <div className="home-divisor"></div>
        <section className="home-main home-main-last">
          <div className="home-cta">
            <div className="home-cta_text">
              Have any questions? Check out the Frequently Asked Questions
              section
            </div>
            <Link to="/FAQ" className="home-cta_button">
              Frequently Asked Questions
            </Link>
          </div>
          <img
            src="../images/coffee.jpg"
            alt="coffee"
            className="home-image1"
          />
        </section>
        <Contact />
      </div>
    );
  }
}
