import React from 'react';
import './NominationPlaceholder.scss';

// Images
import Awards from "../../assets/images/Awards.svg";

const NominationPlaceholder = () => {

    return (
        <div className="placeholder">
            <h2 
                className="placeholder__cta">
                Nominate your favourite movies
            </h2>
            <p 
                className="placeholder__prompt">
                Search by movie title and nominate your top 5 movies for consideration.
            </p>
            <img 
                className="placeholder__image" 
                alt="Awards Ceremony Promo" 
                src={Awards}
            />
        </div>
    );
}

export default NominationPlaceholder;