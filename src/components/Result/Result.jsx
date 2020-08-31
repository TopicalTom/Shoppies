import React, { useContext, useState, useLayoutEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import './Result.scss';

// Components
import NominateButton from '../NominateButton/NominateButton';

const Result = (props) => {

    const {nominations} = useContext(NomContext);
    const {Title, Year, imdbID} = props
    const [maxNominations, setMaxNominations] = useState(false)

    // Removes Nomination Button when Max Nominations reached
    useLayoutEffect(() => {

        if (nominations) {
            (nominations.length >= 5 
                ? setMaxNominations(true)
                : setMaxNominations(false)
            )
        }
    }, [nominations]);

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