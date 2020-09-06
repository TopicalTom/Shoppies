import React, { useState, useEffect } from 'react';
import axios from "axios";
import './SearchBar.scss';

// Components
import Search from "../../assets/icons/Search.svg";
import Cancel from "../../assets/icons/Cancel.svg";
import ResultsDropdown from '../ResultsDropdown/ResultsDropdown';

// API Variables
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "6f490190";
const queryType = "Movie";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [resultsListing, setResultsListing] = useState(null);
    const [hasContent, setHasContent] = useState(false);

    // Updates Search Query Parameters
    function updateSearch(e) {
        setSearchQuery(e.target.value);
    }

    // Resets Search Field
    function resetSearch() {
        setSearchQuery("");
    }

    // Collapses Search Field & Results
    function closeResults() {
        setSearchQuery("");
        setHasContent(false);
    }

    // Updates Search Results Listings
    useEffect(() => {
        
        // Gets Movie Results from OMDB API that match Search Bar Input
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchQuery]);

    // Updates UI Based on Search Field Input
    useEffect(() => {
        (searchQuery.length > 0 
            ? setHasContent(true)
            : setHasContent(false)
        )
    }, [searchQuery]);

    return (
        <>
        <form className="search">
            <img 
                className="search__icon" 
                src={Search}
                alt="Search Icon"
            />
            <label 
                className="search__label" 
                htmlFor="search"> 
                Movie Title Search
            </label>
            <input 
                className="search__input"
                placeholder="Find Movies"
                name="search"
                id="search"
                type="text"
                value={searchQuery}
                onChange={updateSearch}
            />
            {hasContent
                ?   <>
                        <img // Clear Search Button
                            className="search__clear"
                            src={Cancel}
                            alt="Clear Search Icon"
                            onClick={() => resetSearch()}
                        />
                        <ResultsDropdown 
                            searchQuery={searchQuery}
                            resultsListing={resultsListing}
                            closeResults={closeResults} 
                        />
                    </>
                :   <></>
            }
        </form>
        {hasContent
            ?   <div // Overlay for focused Search
                    className="focus" 
                    onClick={() => resetSearch()}
                />
            :   <></>
        }
        </>
    );
}

export default SearchBar;