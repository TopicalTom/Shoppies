import React, { useContext, useState, useLayoutEffect } from 'react';
import { NomContext } from "../../hooks/useContext";
import './Result.scss';

// Components
import NominateButton from '../NominateButton/NominateButton';

// Assets 
import Award from "../../assets/icons/Shoppie.svg";

const Result = (props) => {
    const {nominations} = useContext(NomContext);
    const {Title, Year, imdbID, Poster} = props
    const [maxNominations, setMaxNominations] = useState(false)

    // Removes Nomination Button when Max Nominations reached
    useLayoutEffect(() => {
        (nominations.length >= 5 
            ? setMaxNominations(true)
            : setMaxNominations(false)
        )
    }, [nominations]);

    return (
        <li className="result">
            <div className="result__listing">
                {Poster !== "N/A"
                    ?   <img 
                            className="result__preview" 
                            src={Poster}
                            alt={`${Title} (${Year}) Poster`}
                        />
                    :   <img 
                            className="result__placeholder" 
                            src={Award}
                            alt="Movie Poster Placeholder"
                        />
                }
                <div className="result__details">
                    <span className="result__title">{Title}</span>
                    <span className="result__year">({Year})</span>
                </div>
            </div>
            {maxNominations
                ?   <></>
                :   <NominateButton id={imdbID} />
            }
        </li>
    );
}

export default Result;