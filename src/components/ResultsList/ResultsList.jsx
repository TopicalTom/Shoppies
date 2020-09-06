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