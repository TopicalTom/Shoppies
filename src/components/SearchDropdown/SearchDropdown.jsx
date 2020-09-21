import React, { useContext } from 'react';
import { NomContext } from "../../hooks/useContext";
import { Switch, Route } from "react-router-dom";
import './SearchDropdown.scss';

// Component
import SearchResults from '../SearchResults/SearchResults';
import MovieDetails from '../MovieDetails/MovieDetails';

const SearchDropdown = (props) => {
    const {searchQuery, resultsListing, clearSearch} = props
    const {nominations} = useContext(NomContext);

    return (
        <div className="dropdown">
            {resultsListing
                ?   <Switch>
                        <Route 
                            path="/movie/:id" 
                            render={() => <MovieDetails resultsListing={resultsListing[0]} clearSearch={clearSearch} />} 
                        />
                        <Route 
                            exact path="/" 
                            render={() => <SearchResults resultsListing={resultsListing} clearSearch={clearSearch} />} 
                        />
                    </Switch>
                :   <div className="dropdown__instructions">
                        {searchQuery.length < 1
                            ?   <>
                                    <p  // User Guidance on current task
                                        className="dropdown__task">
                                        {nominations.length < 5
                                            ?   "Type in the movie you want to nominate."
                                            :   "Your nominations are complete."
                                        }
                                    </p>
                                    <p  // Additional Information for how to proceed
                                        className="dropdown__assistance">
                                        {nominations.length < 5
                                            ?   "Only accepts movie titles, not years or actors."
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

export default SearchDropdown;