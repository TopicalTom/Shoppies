import React from 'react';
import './ResultsDropdown.scss';

// Component
import ResultsList from '../ResultsList/ResultsList';

const ResultsDropdown = (props) => {
    const {searchQuery, resultsListing, closeResults} = props

    return (
        <div className="dropdown">
            <p className="dropdown__title">Movie titles with "{searchQuery}"</p>
            {resultsListing
                ?   <>
                        <ResultsList resultsListing={resultsListing}/>
                        <a
                            className="dropdown__close" 
                            href="#search"
                            onClick={() => closeResults()}>
                            Clear search
                        </a>
                    </>
                :   <p className="dropdown__empty">No matches</p>
            }
        </div>
    );
}

export default ResultsDropdown;