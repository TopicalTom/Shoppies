import React from 'react';
import uuid from "react-uuid";
import './ResultsList.scss';

// Components
import Result from "../Result/Result";

const ResultsList = (props) => {
    const {resultsListing} = props

    if (resultsListing) {
        return (
            <ul className="results">
                {resultsListing
                    .map((listing) => {
                        return <Result {...listing} key={uuid()}/>
                    }
                )}
            </ul>
        );
    } else {
        return <span className="results__empty">No Matches</span>
    }
}

export default ResultsList;