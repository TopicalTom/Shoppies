import React from 'react';
import "./Banner.scss"

const Banner = (props) => {

    const {closeBanner} = props

    return (
        <article className="banner">
            <section className="banner__container">
                <h3 
                    className="banner__header">
                    Nominations complete
                </h3>
                <p
                    className="banner__details"
                    >
                    Your nominations will automatically be submitted once the ceremony begins but feel free to make changes or share until then.
                </p>
                <button onClick={() => closeBanner()}>
                    Got it
                </button>
            </section>
        </article>
    );
}

export default Banner;