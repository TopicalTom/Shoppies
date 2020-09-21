import React from 'react';
import uuid from "react-uuid";
import './SearchResults.scss';

// Components
import Movie from "../Movie/Movie";

const SearchResults = (props) => {
    const {resultsListing, clearSearch} = props

    return (
        <>
            <ul className="results">
                {resultsListing
                    .map((listing) => {
                        return <Movie {...listing} key={uuid()}/>
                    }
                )}
            </ul>
            <a
                className="dropdown__close" 
                href="#search"
                onClick={() => clearSearch()}>
                {resultsListing.length > 1
                    ?   `Clear ${resultsListing.length} movie results`
                    :   "Clear movie result"
                }
            </a>
        </>
    );
}

export default SearchResults;