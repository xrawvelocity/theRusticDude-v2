import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="about">
        <iframe className="about-video" title="The Rustic Dude" src="https://www.youtube.com/embed/fRxSNFj7j38" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        <section className="home-main">
          <div className="home-cta">
            <div className="home-cta_text">
              My name is Manuel and I craft beautiful furniture from wood
              for stylish people, like you, in Miami.
            </div>
          </div>
          <img
            src="../images/detail.png"
            alt="detail"
            className="home-image1"
          />
        </section>
      </div>
    );
  }
}
