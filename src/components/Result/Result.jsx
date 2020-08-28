import React from 'react';
import './Result.scss';

import NominateButton from '../NominateButton/NominateButton';

const Result = (props) => {

    const {Title, Year, imdbID} = props

    return (
        <li className="result">
            <div className="result__details">
                <span className="result__title">{Title}</span>
                <span className="result__year">({Year})</span>
            </div>
            <NominateButton 
                id={imdbID}
            />
        </li>
    );
}

export default Result;