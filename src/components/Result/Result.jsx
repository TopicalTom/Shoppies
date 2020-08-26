import React from 'react';
import './Result.scss';

import NominateButton from '../NominateButton/NominateButton';

const Result = (props) => {

    const {title, year, nominations} = props

    return (
        <li className="result">
            <span className="result__title">{title}</span>
            <span className="result__year">({year})</span>
            <NominateButton 
                title={title}
                year={year}
                nominations={nominations}
            />
        </li>
    );
}

export default Result;