import React from 'react';
import './Nominee.scss';

import RemoveButton from "../RemoveButton/RemoveButton";

const Nominee = (props) => {

    const {title, year, id} = props

    return (
        <li className="nominee">
            <div className="nominee__details">
                <span className="nominee__title">{title}</span>
                <span className="nominee__year">({year})</span>
            </div>
            <RemoveButton 
                id={id}
            />
        </li>
    );
}

export default Nominee;