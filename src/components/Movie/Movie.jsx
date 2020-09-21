import React, { useContext, useState, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { NomContext } from "../../hooks/useContext";
import './Movie.scss';

// Components
import NominateButton from '../NominateButton/NominateButton';

// Assets 
import Placeholder from "../../assets/icons/Shoppie.svg";

const Movie = (props) => {
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
        <li className="movie">
            <Link
                to={{
                    pathname: `/movie/${imdbID}`,
                    selectedMovie: {movieID: imdbID}
                }} 
                className="movie__listing">
                {Poster !== "N/A"
                    ?   <img 
                            className="movie__preview" 
                            src={Poster}
                            alt={`${Title} (${Year}) Poster`}
                        />
                    :   <img 
                            className="movie__placeholder" 
                            src={Placeholder}
                            alt="Movie Poster Placeholder"
                        />
                }
                <div className="movie__details">
                    <span className="movie__title">{Title}</span>
                    <span className="movie__year">({Year})</span>
                </div>
            </Link>
            {maxNominations
                ?   <></>
                :   <NominateButton 
                        id={imdbID} 
                        activeCopy="Nominate"
                        inactiveCopy="Added"
                    />
            }
        </li>
    );
}

export default Movie;