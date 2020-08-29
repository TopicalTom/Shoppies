import React, {useState, useLayoutEffect} from 'react';
import './Result.scss';

import NominateButton from '../NominateButton/NominateButton';

const Result = (props) => {

    const {Title, Year, imdbID, count} = props
    const [maxNominations, setMaxNominations] = useState(false)
    //const count = (JSON.parse(localStorage.getItem("nominations"))).length;

    // Removes Nomination Button when Max Nominations reached
    useLayoutEffect(() => {
        (count >= 5 
            ? setMaxNominations(true)
            : setMaxNominations(false)
        )
    }, [count]);

    return (
        <li className="result">
            <div className="result__details">
                <span className="result__title">{Title}</span>
                <span className="result__year">({Year})</span>
            </div>
            {maxNominations
                ?   <></>
                :   <NominateButton id={imdbID} />
            }
        </li>
    );
}

export default Result;