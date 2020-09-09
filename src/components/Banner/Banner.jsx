import React from 'react';
import "./Banner.scss"

const Banner = (props) => {

    const {closeBanner} = props

    return (
        <article className="banner">
            <div className="banner__container">
                <div className="banner__message">
                    <h3 
                        className="banner__header">
                        Nominations complete
                    </h3>
                    <p
                        className="banner__details">
                        Your nominations will automatically be submitted once the ceremony begins.
                    </p>
                </div>
                <button 
                    className="banner__close"
                    onClick={() => closeBanner()}>
                    Continue
                </button>
            </div>
        </article>
    );
}

export default Banner;