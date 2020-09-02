import React from 'react';
import './Nominee.scss';

// Components
import RemoveButton from "../RemoveButton/RemoveButton";

const Nominee = (props) => {
    const {title, year, id, poster} = props

    return (
        <li className="nominee">
            <div className="nominee__details">
                <span 
                    className="nominee__title">
                    {title}
                </span>
                <span 
                    className="nominee__year">
                    ({year})
                </span>
                <RemoveButton id={id} />
            </div>
            <img 
                className="nominee__preview"
                alt={`${title} (${year}) movie poster`} 
                src={poster}
            />
        </li>
    );
}

export default Nominee;

/*
        <li className="nominee">
            <div className="nominee__details">
                <img src={poster}/>
                <span className="nominee__title">{title}</span>
                <span className="nominee__year">({year})</span>
            </div>
            <RemoveButton 
                id={id}
            />
        </li>
*/