import React, { Component } from "react";
import FAQ from "./Faq";
import Projects from "./Projects";
import {
    faTools,
    faTruck,
    faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./About";
import Hero from "./Hero";
import Contact from "./Contact";
import Reviews from "./Reviews";

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home">
                <Hero />
                <Projects />
                <div className="home-random">
                    <h1 className="home-title">Why Choose Us</h1>
                    <div className="home-features">
                        <div className="home-features-card">
                            <FontAwesomeIcon
                                icon={faTruck}
                                className="home-features-card-icon"
                            />
                            <div className="home-features-card-title">
                                We Deliver
                            </div>
                            <div className="home-features-card-text">
                                As long as you are not located more than 50
                                miles away, we will deliver your custom rustic
                                furniture to your house!
                            </div>
                        </div>

                        <div className="home-features-card">
                            <FontAwesomeIcon
                                icon={faTools}
                                className="home-features-card-icon"
                            />
                            <div className="home-features-card-title">
                                Custom Made
                            </div>
                            <div className="home-features-card-text">
                                Can't quite find the perfect furniture? Do not
                                worry, we will use our expertise to make sure
                                you are 100% satisfied with our work.
                            </div>
                        </div>

                        <div className="home-features-card">
                            <FontAwesomeIcon
                                icon={faUserFriends}
                                className="home-features-card-icon"
                            />
                            <div className="home-features-card-title">
                                Family-Owned
                            </div>
                            <div className="home-features-card-text">
                                We are a family-owned and operated business with
                                a real dynamic team and vision.
                            </div>
                        </div>
                    </div>
                </div>
                <About />

                <Reviews />

                <FAQ />

                <Contact />
            </div>
        );
    }
}
