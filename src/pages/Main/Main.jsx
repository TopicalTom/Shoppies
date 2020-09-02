import React, {useContext, useState, useLayoutEffect} from 'react';
import { NomContext } from "../../hooks/useContext";
import axios from "axios";
import './Main.scss';

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";
import Placeholder from "../../components/NominationPlaceholder/NominationPlaceholder";

// Assets
import ShoppiesLogo from "../../assets/logos/ShoppiesLogo.svg";

// API Variables
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "6f490190";
const queryType = "Movie";

function Main() {
    const {nominations} = useContext(NomContext);
    const [resultsListing, setResultsListing] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Updates Search Query Parameters
    function updateSearch(e) {
        setSearchQuery(e.target.value);
    }

    // Resets Search Field
    function resetSearch() {
        setSearchQuery("");
    }

    // Updates Search Results Listings
    useLayoutEffect(() => {
        
        // Gets Movie Results from OMDB API that match Search Bar Input
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
    }, [searchQuery]); // Updates on SearchBar Input Changes

    return (
        <main className="main">
            <section className="main__container">
                <header className="main__heading">
                    <img 
                        className="main__logo"
                        alt="Shoppies Logo"
                        src={ShoppiesLogo}
                    />
                    <div>
                        <span 
                            className="main__pretext">
                            The
                        </span>
                        <h1 
                            className="main__title">
                            Shoppies
                        </h1>
                    </div>
                </header>
                <article className="main__section">
                    <SearchBar
                        updateSearch={updateSearch}
                        resetSearch={resetSearch}
                        searchParams={searchQuery}
                        length={searchQuery.length}
                    />
                </article>
                <article className="main__section">
                    <div className="main__block main__block--results">
                        <h2 
                            className="main__subtitle">
                            {resultsListing 
                                ? `Movies with "${searchQuery}"`
                                : "Search Results"
                            }
                        </h2>
                        <ResultsList 
                            resultsListing={resultsListing}
                        />
                    </div>
                    <div className="main__block main__block--nominations">
                        {nominations.length !== 0
                            ?   <NominationList />
                            :   <Placeholder />
                        }
                    </div>
                </article>
            </section>    
        </main>
    );
}

export default Main;

/*
import React, {useState, useEffect, useLayoutEffect} from 'react';
import axios from "axios";
import './Main.scss';

// Assets
import ShoppiesLogo from "../../assets/logos/ShoppiesLogo.svg";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";

// API Variables
const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "6f490190";
const queryType = "Movie";

function Main() {
    const [resultsListing, setResultsListing] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Updates Search Query Parameters
    function updateSearch(e) {
        setSearchQuery(e.target.value);
    }

    // Resets Search Field
    function resetSearch() {
        setSearchQuery("");
    }

    // Updates Search Results Listings
    useLayoutEffect(() => {
        
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
            .then(response => {
                setResultsListing(response.data.Search)
            })
            .catch(error => {
                console.log(error)
            })
            
    }, [searchQuery]); // On SearchQuery Change

    return (
        <main className="main">
            <section className="main__container">
                <header className="main__heading">
                    <img 
                        className="main__logo"
                        alt="Shoppies Logo"
                        src={ShoppiesLogo}
                    />
                    <div>
                        <span 
                            className="main__pretext">
                            The
                        </span>
                        <h1 
                            className="main__title">
                            Shoppies
                        </h1>
                    </div>
                </header>
                <article className="main__section">
                    <SearchBar
                        updateSearch={updateSearch}
                        resetSearch={resetSearch}
                        searchParams={searchQuery}
                        length={searchQuery.length}
                    />
                </article>
                <article className="main__section">
                    <div className="main__block main__block--half">
                        <h2 
                            className="main__subtitle">
                            {resultsListing 
                                ? `Movies with "${searchQuery}"`
                                : "Search Results"
                            }
                        </h2>
                        <ResultsList 
                            resultsListing={resultsListing}
                        />
                    </div>
                    <div className="main__block main__block--half">
                        <h2 
                            className="main__subtitle">
                            My Nominations
                        </h2>
                        <NominationList />
                    </div>
                </article>
            </section>    
        </main>
    );
}

export default Main;

*/