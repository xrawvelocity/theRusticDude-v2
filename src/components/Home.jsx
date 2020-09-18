import React, { Component } from "react";
import FAQ from "./Faq";
import Projects from "./Projects";
import {
  faTools,
  faTruck,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <a href="#contact" class="home-hero-button">
              Get In Touch
            </a>
          </div>
        </div>

        {/* <h1 className="home-title">Our Work</h1>
        <Projects /> */}
        {/* <h1 className="home-title">About Us</h1>

        <iframe
          className="about-video"
          title="The Rustic Dude"
          src="https://www.youtube.com/embed/fRxSNFj7j38"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
        <div className="home-divisor"></div> */}

        <h1 id="#projects" className="home-title">
          View Our Work
        </h1>
        <Projects />
        <div className="home-random">
          <h1 className="home-title">Why Choose Us</h1>
          <div className="home-features">
            <div className="home-features-card">
              <FontAwesomeIcon
                icon={faTruck}
                className="home-features-card-icon"
              />
              <div className="home-features-card-title">Free Delivery</div>
              <div className="home-features-card-text">
                As long as you are not located more than 50 miles away, we will
                deliver your custom rustic furniture to your house for free!
              </div>
            </div>

            <div className="home-features-card">
              <FontAwesomeIcon
                icon={faTools}
                className="home-features-card-icon"
              />
              <div className="home-features-card-title">Custom Made</div>
              <div className="home-features-card-text">
                Can't quite find the perfect furniture? Do not worry, we will
                use our expertise to make sure you are 100% satisfied with our
                work.
              </div>
            </div>

            <div className="home-features-card">
              <FontAwesomeIcon
                icon={faUserFriends}
                className="home-features-card-icon"
              />
              <div className="home-features-card-title">Family-Owned</div>
              <div className="home-features-card-text">
                We are a family-owned and operated business with a real dynamic
                team and vision.
              </div>
            </div>
          </div>
        </div>
        <h1 className="home-title">Meet The Team</h1>
        <section className="home-main">
          <img src="../images/tito1.PNG" alt="manuel" className="home-image2" />
          <div className="home-cta">
            <div className="home-cta_text">
              Hello! My name is <strong>Manuel</strong> and there's nothing that
              I'm more passionate about than working with my hands
            </div>
            {/* <a href="#projects" className="home-cta_button">
              View Projects
            </a> */}
          </div>
        </section>
        <section className="home-main">
          <div className="home-cta">
            <div className="home-cta_text">
              Hi! My name is <strong>Claudia</strong> I love assisting our
              clients with any questions they might have
            </div>
            {/* <a href="#faq" className="home-cta_button">
              Frequently Asked Questions
            </a> */}
          </div>
          <img
            src="../images/claudia4.png"
            alt="claudia"
            className="home-image1"
          />
        </section>
        <div className="home-banner">
          <div className="home-banner-image_1 home-banner-image-container">
            <div className="home-banner-review">
              <img
                src="https://static.businessnews.com.au/sites/default/files/styles/wabn_kb_company_logo/public/brendan%20white.jpg?itok=CDrEecZZ"
                alt="person1"
                className="home-banner-review-img"
              />

              <p className="home-banner-review-review">
                "This table is perfect for our backyard, we couldn't find the
                right fit until we reached out to TheRusticDude"
              </p>
              <h3 className="home-banner-review-name">- Jonathan A.</h3>
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
                src="https://ak.picdn.net/shutterstock/videos/4783967/thumb/1.jpg"
                alt="person2"
                className="home-banner-review-img"
              />

              <p className="home-banner-review-review">
                "The contrast that this table has with our white interior is
                mind blowing, this custom table has really livened up my house"
              </p>
              <h3 className="home-banner-review-name">- Jade H.</h3>
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
                "Every time I have people over they compliment my new rustic
                table, this is really well done!"
              </p>
              <h3 className="home-banner-review-name">- Jennifer S.</h3>
              <p className="home-banner-review-rating">5/5</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/therusticdude.appspot.com/o/photos%2Ftable8.jpeg?alt=media"
              alt=""
              className="home-banner-image"
            />
          </div>
        </div>

        <h1 id="faq" className="home-title">
          Have Any Questions?
        </h1>

        <FAQ />

        <section id="contact" className="home-contact">
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
              Send Email
            </button>
          </form>
        </section>
      </div>
    );
  }
}
