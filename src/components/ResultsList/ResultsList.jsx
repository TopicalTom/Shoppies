import React from 'react';
import uuid from "react-uuid";
import './ResultsList.scss';

import Result from "../Result/Result";

const ResultsList = (props) => {

    const {resultsListing} = props

    if (resultsListing && resultsListing.length !== 0 && resultsListing !== undefined) {
        return (
            <ul className="results">
                {resultsListing
                    .map((listing) => {
                        return <Result {...listing} key={uuid()} />
                    }
                )}
            </ul>
        );
    } else {
        return <></>
    }
}

export default ResultsList;