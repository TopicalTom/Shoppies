import React from 'react';
import './Result.scss';

import NominateButton from '../NominateButton/NominateButton';

const Result = (props) => {

    const {Title, Year, imdbID, nominations} = props
    //console.log(props)

    return (
        <li className="result">
            <span className="result__title">{Title}</span>
            <span className="result__year">({Year})</span>
            <NominateButton 
                id={imdbID}
            />
        </li>
    );
}

export default Result;