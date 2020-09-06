import React from 'react';
import './ResultsDropdown.scss';

// Component
import ResultsList from '../ResultsList/ResultsList';

const ResultsDropdown = (props) => {
    const {searchQuery, resultsListing, closeResults} = props

    return (
        <div className="dropdown">
            <p className="dropdown__title">Movie results for "{searchQuery}"</p>
            {resultsListing
                ?   <>
                        <ResultsList resultsListing={resultsListing}/>
                        <button 
                            className="dropdown__close" 
                            onClick={() => closeResults()}>
                            Close results
                        </button>
                    </>
                :   <span>No matches</span>
            }
        </div>
    );
}

export default ResultsDropdown;