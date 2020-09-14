import React, { useContext } from 'react';
import { NomContext } from "../../hooks/useContext";
import './ResultsDropdown.scss';

// Component
import ResultsList from '../ResultsList/ResultsList';

const ResultsDropdown = (props) => {
    const {searchQuery, resultsListing, clearSearch} = props
    const {nominations} = useContext(NomContext);

    return (
        <div className="dropdown">
            {resultsListing
                ?   <>
                        <ResultsList resultsListing={resultsListing}/>
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
                :   <div className="dropdown__instructions">
                        {searchQuery.length < 1
                            ?   <>
                                    <p  // User Guidance on current task
                                        className="dropdown__task">
                                        {nominations.length < 5
                                            ?   "Type in the movie you want to nominate."
                                            :   "Your nominations are complete"
                                        }
                                    </p>
                                    <p  // Additional Information for how to proceed
                                        className="dropdown__assistance">
                                        {nominations.length < 5
                                            ?   "Will only accept movie titles, not years or actors."
                                            :   "Hover over your current nominations (below) to make changes if you want to add new movies."
                                        }
                                    </p>
                                </>
                            :   <>
                                    <p  // Notifies the user of something that requires their attention 
                                        className="dropdown__issue">
                                        {searchQuery.length <= 2
                                            ?   `Too many results for just "${searchQuery}"`
                                            :   `No matches for "${searchQuery}"`
                                        }
                                    </p>
                                    <p  // Additional Information on how to overcome issue 
                                        className="dropdown__troubleshoot">
                                        {searchQuery.length <= 2
                                            ?   "Try adding more of the movie title."
                                            :   "Check your spelling or try adding more of the movie title."
                                        }
                                    </p>
                                </>
                        }  

                    </div>
            }
        </div>
    );
}

export default ResultsDropdown;