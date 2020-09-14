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
                        Make sure to submit your nominations before the Shoppies red carpet rolls out on 
                        <span 
                            className="banner__emphasize">
                            December 10th, 2020
                        </span>
                        at 
                        <span
                            className="banner__emphasize">
                            7PM EST.
                        </span>
                    </p>
                </div>
                <button 
                    className="banner__button banner__button--secondary"
                    onClick={() => closeBanner()}>
                    <span
                        className="banner__action banner__action--secondary">
                        Submit Later
                    </span>
                </button>
                <button 
                    className="banner__button banner__button--primary"
                    onClick={() => closeBanner()}>
                    <span
                        className="banner__action banner__action--primary">
                        Submit Nominations
                    </span>
                </button>
            </div>
        </article>
    );
}

export default Banner;