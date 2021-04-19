import React from "react";
import { Rating } from "@material-ui/lab";

export default function Reviews() {
    return (
        <div id="reviews" className="home-banner">
            <div className="home-banner-image_1 home-banner-image-container">
                <div className="home-banner-review">
                    <img
                        src="https://static.businessnews.com.au/sites/default/files/styles/wabn_kb_company_logo/public/brendan%20white.jpg?itok=CDrEecZZ"
                        alt="person1"
                        className="home-banner-review-img"
                    />

                    <p className="home-banner-review-content">
                        "This table is perfect for our backyard, we couldn't
                        find the right fit until we reached out to
                        TheRusticDude"
                    </p>
                    <h3 className="home-banner-review-name">- Jonathan A.</h3>
                    <p className="home-banner-review-rating">
                        <Rating readOnly size="large" value={4} />
                    </p>
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

                    <p className="home-banner-review-content">
                        "The contrast that this table has with our white
                        interior is mind blowing, this custom table has really
                        livened up my house"
                    </p>
                    <h3 className="home-banner-review-name">- Jade H.</h3>
                    <p className="home-banner-review-rating">
                        <Rating readOnly size="large" value={5} />
                    </p>
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
                        "Every time I have people over they compliment my new
                        rustic table, this is really well done!"
                    </p>
                    <h3 className="home-banner-review-name">- Jennifer S.</h3>
                    <p className="home-banner-review-rating">
                        <Rating readOnly size="large" value={5} />
                    </p>
                </div>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/therusticdude.appspot.com/o/photos%2Ftable8.jpeg?alt=media"
                    alt=""
                    className="home-banner-image"
                />
            </div>
        </div>
    );
}
