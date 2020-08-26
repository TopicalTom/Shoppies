import React from 'react';
import uuid from "react-uuid";
import './ResultsList.scss';

import Result from "../Result/Result";

const ResultsList = (props) => {

    const {resultsListing, nominationListing} = props

    if (resultsListing && resultsListing !== undefined) {
        return (
            <>
            <ul className="results">
                {resultsListing
                    .map((listing) => {
                        return <Result {...listing} nominations={nominationListing[0].title} key={uuid()} />
                    }
                )}
            </ul>
            </>
        );
    } else {
        return <></>
    }
}

export default ResultsList;