import React, {useState, useLayoutEffect} from 'react';
import axios from "axios";
import './Main.scss';

// Assets
import ShoppiesLogo from "../../assets/icons/ShoppiesLogo.svg";

// Components
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import NominationList from "../../components/NominationList/NominationList";

// API Variables
const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "6f490190";
const queryType = "Movie";

function Main() {
    const [resultsListing, setResultsListing] = useState([]);
    const [nominationListing, setNominationListing] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const nominationID = JSON.parse(localStorage.getItem("nominations"));

    // Updates Search Query Parameters
    function handleChange(e) {
        setSearchQuery(e.target.value);
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
    }, [searchQuery]);

    // Updates Movie Nomination Listings
    useLayoutEffect(() => { 
        
        const check = JSON.parse(localStorage.getItem("nominations"));

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


    return (
        <main className="main">
            <section className="main__container">
                <header className="main__header">
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
                        handleChange={handleChange} 
                    />
                    </article>
                <article className="main__section">
                    <div className="main__block main__block--half">
                        <h2 
                            className="main__subtitle">
                            {resultsListing 
                                ?   `Movies with "${searchQuery}"`
                                :   "Search Results"
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
                        <NominationList 
                            nominationListing={nominationListing}
                            nominationID={nominationID}
                        />
                    </div>
                </article>
            </section>    
        </main>
    );
}

export default Main;

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