import React from 'react';
import './ResultsDropdown.scss';

// Component
import ResultsList from '../ResultsList/ResultsList';

const ResultsDropdown = (props) => {
    const {searchQuery, resultsListing, closeResults} = props

    return (
        <div className="dropdown">
            {resultsListing
                ?   <>
                        <ResultsList resultsListing={resultsListing}/>
                        <a
                            className="dropdown__close" 
                            href="#search"
                            onClick={() => closeResults()}>
                            {resultsListing.length > 1
                                ?   `Clear ${resultsListing.length} movie results`
                                :   "Clear movie result"
                            }
                        </a>
                    </>
                :   <div className="dropdown__empty">  
                        <p 
                            className="dropdown__issue">
                            {searchQuery.length <= 2
                                ?   `Too many results for "${searchQuery}"`
                                :   `No matches for "${searchQuery}"`
                            }
                        </p>
                        <p 
                            className="dropdown__troubleshoot">
                            {searchQuery.length <= 2
                                ?   "Try adding more of the movie title."
                                :   "Check your spelling or try narrowing your search."
                            }
                        </p>
                    </div>
            }
        </div>
    );
}

export default ResultsDropdown;