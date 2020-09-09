import React from 'react';
import './NominationPlaceholder.scss';

// Images
import Awards from "../../assets/images/Awards.svg";

const NominationPlaceholder = () => {

    return (
        <div className="placeholder">
            <img 
                className="placeholder__image" 
                alt="Awards Ceremony Promo" 
                src={Awards}
            />
            <h3 
                className="placeholder__cta">
                There's nothing here...
            </h3>
            <p 
                className="placeholder__prompt">
                Movie nominations can be made through the search bar above.
            </p>
            <a
                className="placeholder__redirect" 
                href="#search">
                Start Nominating
            </a>
        </div>
    );
}

export default NominationPlaceholder;