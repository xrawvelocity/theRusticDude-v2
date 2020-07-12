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
            <Link to="/contact" class="home-hero-button">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="home-divisor"></div>
        <h1 className="home-title">Meet The Team</h1>
        <section className="home-main">
          <img src="../images/tito1.PNG" alt="manuel" className="home-image2" />
          <div className="home-cta">
            <div className="home-cta_text">
              Hello! My name is Manuel and there's nothing that I'm more
              passionate about than working with my hands
            </div>
            <Link to="/projects" className="home-cta_button">
              Previous Projects
            </Link>
          </div>
        </section>
        <div className="home-divisor"></div>
        <section className="home-main">
          <div className="home-cta">
            <div className="home-cta_text">
              Hi! My name is Claudia and if you want to find out more about us
              click the button below
            </div>
            <Link to="/about" className="home-cta_button">
              Learn More
            </Link>
          </div>
          <img
            src="../images/claudia4.png"
            alt="claudia"
            className="home-image1"
          />
        </section>
        <div className="home-divisor"></div>
        <div className="home-banner">
          <div className="home-banner-image_1 home-banner-image-container">
            <div className="home-banner-review">
              <img
                src="https://www.famefocus.com/wp-content/uploads/2017/11/harrison-ford-1000x600.jpg"
                alt="harrison"
                className="home-banner-review-img"
              />

              <p className="home-banner-review-review">
                "This table is perfect for our backyard, we couldn't find the
                perfect one until we reached out to TheRusticDude"
              </p>
              <h3 className="home-banner-review-name">-Harrison Ford</h3>
              <p className="home-banner-review-rating">4.5/5</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/therusticdude.appspot.com/o/photos%2Ftable7.jpeg?alt=media"
              alt=""
              className="home-banner-image"
            />
          </div>
          <div className="home-banner-image_2 home-banner-image-container">
            <div className="home-banner-review">
              <img
                src="https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp"
                alt="morgan"
                className="home-banner-review-img"
              />

              <p className="home-banner-review-review">
                "The contrast that this table has with our white interior is
                mind blowing, this custom table has really livened up my house"
              </p>
              <h3 className="home-banner-review-name">-Morgan Freeman</h3>
              <p className="home-banner-review-rating">5/5</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/therusticdude.appspot.com/o/photos%2F33BF36C4-89E9-424C-A26F-3BFA664C587E.jpeg?alt=media"
              alt=""
              className="home-banner-image"
            />
          </div>
          <div className="home-banner-image_3 home-banner-image-container">
            <div className="home-banner-review">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn79XcUn0LZod-npfC65XeCkb4Gtzvzh_R1A&usqp=CAU"
                alt="girl"
                className="home-banner-review-img"
              />

              <p className="home-banner-review-content">
                "Every time I have people over they compliment my new rustic table, this is really well done!"
              </p>
              <h3 className="home-banner-review-name">-Jennifer Smith</h3>
              <p className="home-banner-review-rating">5/5</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/therusticdude.appspot.com/o/photos%2Ftable8.jpeg?alt=media"
              alt=""
              className="home-banner-image"
            />
          </div>
        </div>
        <div className="home-divisor"></div>

        <section className="home-contact">
          <h4 className="home-contact-title">
            For any inquiries do not hesitate to react out!
          </h4>
          <form
            class="home-contact-form"
            action="https://formspree.io/xqkyqkad"
            method="POST"
          >
            <div class="home-contact-form-group">
              <input
                class="home-contact-form-group__input"
                type="text"
                placeholder=""
                name="name"
                id="name"
                required
              />
              <label class="home-contact-form-group__label" for="name">
                Name
              </label>
            </div>

            <div class="home-contact-form-group">
              <input
                class="home-contact-form-group__input"
                type="email"
                placeholder=""
                name="_replyto"
                id="email"
                required
              />
              <label class="home-contact-form-group__label" for="email">
                Email
              </label>
            </div>

            <div class="home-contact-form-group">
              <input
                class="home-contact-form-group__input"
                name="message"
                placeholder=""
                id="message"
              />
              <label class="home-contact-form-group__label" for="message">
                Message
              </label>
            </div>
            <button class="home-contact-form-button" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}
