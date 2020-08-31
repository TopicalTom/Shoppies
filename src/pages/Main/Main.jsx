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

/*
    const storedNoms = JSON.parse(localStorage.getItem("nominations"));
    const nominationCount = storedNoms.length;
    const [nominationListing, setNominationListing] = useState([])
    useEffect(() => {
        //if(storedNoms !== null) {
            {storedNoms
                .map((item) => {
                    axios.get(`${API_URL}i=${item.movieNomination}&apikey=${API_KEY}`)
                        .then(response => {
                            const nominee = ({
                                title: response.data.Title,
                                year: response.data.Year,
                                id: response.data.imdbID
                            })
                            nominationListing.push(nominee)
                            setNominationListing(nominationListing)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    })
            //}
        }
    }, []); // Runs only once 

*/

    /*

    // Updates Movie Nomination Listings
    useLayoutEffect(() => { 
        
        const check = JSON.parse(localStorage.getItem("nominations"));
        //console.log(check)
        //const check = "tt0462499";
        //const ids = check[0].movieNomination

        axios.get(`${API_URL}i=${check}&apikey=${API_KEY}`)
            .then(response => {
                setNominationListing([
                    {
                        title: response.data.Title,
                        year: response.data.Year,
                        id: response.data.imdbID
                    }
                ])
            })
            .catch(error => {
                console.log(error)
            })
    }, [nominationListing]);

    */

/*
    // Updates Search Query Parameters
    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    // Gets Search Results Listings
    function getResults() {
        axios.get(`${API_URL}s=${searchQuery}&type=${queryType}&apikey=${API_KEY}`)
        .then(response => {
            setResultsListing(response.data.Search)
        })
        .catch(error => {
            console.log(error)
        })
    }

    // Gets Movie Nominations Listings
    function getNominations() {
                //const check = JSON.parse(localStorage.getItem("nominations"));
                const check = "tt0462499";
                //const ids = check[0].movieNomination
        
                axios.get(`${API_URL}i=${check}&apikey=${API_KEY}`)
                    .then(response => {
                        setNominationListing([
                            {
                                title: response.data.Title,
                                year: response.data.Year,
                                id: response.data.imdbID
                            }
                        ])
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }

    // Updates DOM
    useLayoutEffect(() => {
        getResults()
        getNominations()
    }, [searchQuery, nominationListing]);

*/

/*

    const [newNominee, setNewNominee] = useState({});

    const listings = [{listing: "tt0462499"}, {listing: "tt0089880"}]
    // Updates Movie Nomination Listings
    useLayoutEffect(() => { 
        
        {listings
            .map((listingID) => {
                axios.get(`${API_URL}i=${listingID.listing}&apikey=${API_KEY}`)
                    .then(response => {
                        setNominationListing([
                            {
                                title: response.data.Title,
                                year: response.data.Year,
                                id: response.data.imdbID
                            }
                        ])
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        )}
    }, [listings]);

    console.log(nominationListing)

*/