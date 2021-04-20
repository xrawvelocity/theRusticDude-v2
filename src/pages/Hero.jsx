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
                <h2 className="home-hero-subtitle">Based in Miami, FL</h2>
                <a href="#projects" class="home-hero-button">
                    View Our Work
                </a>
            </div>
            <div className="home-hero-form">
                <h4 className="home-contact-title">Get a free quote</h4>
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
                        <label
                            class="home-contact-form-group__label"
                            for="name"
                        >
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
                        <label
                            class="home-contact-form-group__label"
                            for="email"
                        >
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
                        <label
                            class="home-contact-form-group__label"
                            for="message"
                        >
                            Message
                        </label>
                    </div>
                    <button class="home-contact-form-button" type="submit">
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
}
