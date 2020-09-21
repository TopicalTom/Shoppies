import React, { useEffect, useLayoutEffect, useState, useContext, useRef } from 'react';
import { NomContext } from "../../hooks/useContext";
import { Link } from "react-router-dom";
import axios from "axios";
import './MovieDetails.scss';

// Components
import NominateButton from '../NominateButton/NominateButton';
import Loader from "../Loader/Loader";

// Assets
import Back from "../../assets/icons/Back.svg";
import Placeholder from "../../assets/icons/Shoppie.svg";

// API Variables
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "6f490190";

const MovieDetails = (props) => {
    const {clearSearch} = props
    const contentWindow = useRef();
    const [scrollTop, setScrollTop] = useState(0);

    function handleScroll() {
        const scrollY = contentWindow.current.scrollTop;
        setScrollTop(scrollY);
    }

    const movieID = window.location.pathname.split('/movie/')[1];
    const [currentMovie, setCurrentMovie] = useState(undefined);

    // Grabs Full Movie Details
    useEffect(() => {
        axios.get(`${API_URL}i=${movieID}&apikey=${API_KEY}`)
            .then(response => {
                const movie = ({
                    id: response.data.imdbID,
                    title: response.data.Title,
                    year: response.data.Year,
                    rating: response.data.Rated,
                    plot: response.data.Plot,
                    genre: response.data.Genre,
                    poster: response.data.Poster,
                    details: {
                        director: response.data.Director,
                        writer: response.data.Writer,
                        cast: response.data.Actors,
                        runtime: response.data.Runtime,
                        language: response.data.Language
                    }
                })
                setCurrentMovie(movie)
            })
            .catch(error => {
                console.log(error)
            })
    });

    const {nominations} = useContext(NomContext);
    const [maxNominations, setMaxNominations] = useState(false);

    // Removes Nomination Button when Max Nominations reached
    useLayoutEffect(() => {
        (nominations.length >= 5 
            ? setMaxNominations(true)
            : setMaxNominations(false)
        )
    }, [nominations]);

    if (currentMovie !== undefined) {
        const {title, poster, year, plot, genre, details, id} = currentMovie

        return (
            <div className="details">
                <div
                    className={`details__header details__header--${scrollTop > 85 ? "scrolled" : ""}`}>
                    <Link 
                        to="/" 
                        className="details__return">
                        <img 
                            className="details__back" 
                            src={Back}
                        />
                    </Link>
                    <span className="details__context">{scrollTop > 85
                        ?   title
                        :   ""
                    }
                    </span>
                </div>
                {poster !== "N/A"
                    ?   <img 
                            className="details__poster" 
                            src={poster}
                        />
                    :   <img 
                            className="details__placeholder" 
                            src={Placeholder}
                        />
                }
                <div 
                    className="details__content" 
                    ref={contentWindow} 
                    onScroll={() => handleScroll()}>
                    <h3 
                        className="details__title">
                        {title}
                    </h3>
                    <p 
                        className="details__year">
                        {year}
                    </p>
                    <div className="details__rating">
                        <div className="details__star" />
                        <div className="details__star" />
                        <div className="details__star" />
                        <div className="details__star" />
                        <div className="details__star" />
                    </div>
                    <p 
                        className="details__plot">
                        {plot}
                    </p>
                    <div 
                        className="details__genres">
                        {genre.split(`,`).map(
                            item => <p className="details__genre">{item}</p>
                        )}
                    </div>
                    {Object.entries(details).map(([key, value]) => {
                        return (
                            <>
                                <span 
                                    className="details__label">
                                    {key}
                                </span>
                                <p 
                                    className="details__item">
                                    {value}
                                </p>
                            </>
                        )
                    })}
                </div>
                <div
                    className="details__action">
                    {maxNominations
                        ?   <a
                                className="details__close"
                                href="#search"
                                onClick={() => clearSearch()}>
                                Remove a Nomination to add this movie
                            </a>
                        :   <NominateButton 
                                id={id}
                                activeCopy="Nominate"
                                inactiveCopy="Added"
                            />
                    }
                </div>
            </div>
        );
    } else {
        return <Loader />
    }
}

export default MovieDetails;