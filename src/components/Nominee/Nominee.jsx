import React from 'react';
import './Nominee.scss';

// Components
import RemoveButton from "../RemoveButton/RemoveButton";

// Assets
import award from "../../assets/icons/Shoppie.svg";

const Nominee = (props) => {
    const {title, year, id, poster} = props

    return (
        <li className="nominee">
            <div className="nominee__details">
                <span 
                    className="nominee__title nominee__title--main">
                    {title}
                </span>
                <span 
                    className="nominee__year nominee__year--main">
                    ({year})
                </span>
                <RemoveButton id={id} />
            </div>
            {poster !== "N/A"
                ?   <img 
                        className="nominee__preview"
                        alt={`${title} (${year}) movie poster`} 
                        src={poster}
                    />
                :   <div className="nominee__placeholder">
                        <img 
                           className="nominee__icon"
                           alt="Nominee Preview Placeholder"
                           src={award}
                        />
                        <span 
                            className="nominee__title nominee__title--placeholder">
                            {title}
                        </span>
                        <span 
                            className="nominee__year nominee__year--placeholder">
                            ({year})
                        </span>
                    </div>
            }
        </li>
    );
}

export default Nominee;