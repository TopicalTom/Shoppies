import React from 'react';
import uuid from "react-uuid";
import './ResultsList.scss';

import Result from "../Result/Result";

const ResultsList = (props) => {

    const {resultsListing, count} = props

    if (resultsListing) {
        return (
            <ul className="results">
                {resultsListing
                    .map((listing) => {
                        const key = listing.imdbID
                        return <Result {...listing} count={count} key={key}/>
                    }
                )}
            </ul>
        );
    } else {
        return <span className="results__empty">No Matches</span>
    }
}

export default ResultsList;