import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <h1 className="home-title">Meet The Team</h1>
                <section className="home-main">
                    <img
                        src="../images/tito1.PNG"
                        alt="manuel"
                        className="home-image2"
                    />
                    <div className="home-cta">
                        <div className="home-cta_text">
                            My name is Manuel and there's nothing that I'm more
                            passionate about than working with my hands
                        </div>
                        {/* <Link to="/projects" className="home-cta_button">
                            Previous Projects
                        </Link> */}
                    </div>
                </section>
                <div className="home-divisor"></div>
                <section className="home-main">
                    <div className="home-cta">
                        <div className="home-cta_text">
                            Hi! My name is Claudia and I love helping people be
                            satisfied with our work
                        </div>
                        {/* <Link to="/about" className="home-cta_button">
                            Learn More
                        </Link> */}
                    </div>
                    <img
                        src="../images/claudia4.png"
                        alt="claudia"
                        className="home-image1"
                    />
                </section>
            </>
        );
    }
}
