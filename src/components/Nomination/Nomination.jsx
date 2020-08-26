import React from 'react';
import './Nomination.scss';

import RemoveButton from "../RemoveButton/RemoveButton";

const Nomination = (props) => {

    const {title, year, action} = props

    return (
        <li className="nomination">
            <span className="nomination__title">{title}</span>
            <span className="nomination__year">({year})</span>
            <RemoveButton 
                action={action}
            />
        </li>
    );
}

export default Nomination;