import React from "react";

export default function Hero() {
    return (
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
    );
}
