import React from 'react';
import uuid from "react-uuid";
import './ResultsList.scss';

// Components
import Result from "../Result/Result";

const ResultsList = (props) => {
    const {resultsListing, clearSearch} = props

    return (
        <>
            <ul className="results">
                {resultsListing
                    .map((listing) => {
                        return <Result {...listing} key={uuid()}/>
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

export default ResultsList;

/*

import React from 'react';
import uuid from "react-uuid";
import './ResultsList.scss';

// Components
import Result from "../Result/Result";

const ResultsList = (props) => {
    const {resultsListing} = props

    return (
        <ul className="results">
            {resultsListing
                .map((listing) => {
                    return <Result {...listing} key={uuid()}/>
                }
            )}
        </ul>
        
    );
}

export default ResultsList;

*/